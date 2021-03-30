pragma solidity 0.7.4;

contract Minter {
    
    // events
    event MintedReal(uint256 indexed kind, uint256 indexed id, uint256 tip, address indexed owner);
    event MintedFun(uint256 indexed kind, uint256 indexed id, uint256 tip, address indexed owner);
    event NewTipLeader(address indexed leader);

    // fun kind
    uint256 public constant FUN_PRICE = 1e16; // 0.01 ETH
    uint256 public constant FUN_MINT_LIMIT = 100000;
    uint256 public funMint;
    mapping (uint256 => bool) public nftFunKinds;
    
    // real kind
    uint256 public constant REAL_ID_OFFSET = 1e18;
    uint256 public constant REAL_MINT_LIMIT = 5;
    mapping (uint256 => bool) public nftKinds;
    mapping (uint256 => uint256) public nftKindsNumbers;
    mapping (uint256 => uint256) public nftKindsPrices;
    
    // global ownership registry
    mapping (uint256 => address) public owner;
    
    // tipping state
    mapping (address => uint256) public tips;
    address public tipLeader;
    
    constructor(uint256 _nftKinds, uint256 _nftFunKinds) public {
        // register all real NFT kinds for minting
        for (uint256 kind = 1; kind <= _nftKinds; kind++) {
            nftKinds[kind] = true;
            nftKindsPrices[kind] = 5 * 1e17;
        }
        // register all fund NFT kinds for minting
        for (uint256 kind = 1; kind <= _nftFunKinds; kind++) {
            nftFunKinds[kind] = true;
        }
    }
    
    function mint(uint256 nftKind) external payable {
        require(nftKinds[nftKind], "kind does not exist");
        require(nftKindsNumbers[nftKind] < REAL_MINT_LIMIT, "all gone");
        require(msg.value >= nftKindsPrices[nftKind], "too cheap");
        nftKindsNumbers[nftKind] = nftKindsNumbers[nftKind] + 1;
        nftKindsPrices[nftKind] = nftKindsPrices[nftKind] + 5 * 1e17; // + 0.5 ETH
        uint256 nftId = REAL_ID_OFFSET + nftKind * 1e6 + nftKindsNumbers[nftKind];
        require(owner[nftId] == address(0), "already owned"); // sanity check
        owner[nftId] = msg.sender;
        emit MintedReal(nftKind, nftId, 0, msg.sender);
    }
    
    function mintFun(uint256 nftKind) external payable {
        require(nftFunKinds[nftKind], "kind does not exist");
        require(funMint < FUN_MINT_LIMIT, "all are gone!");
        require(msg.value >= FUN_PRICE, "too cheap!");
        uint256 tip = msg.value - FUN_PRICE;
        tips[msg.sender] = tips[msg.sender] + tip;
        funMint = funMint + 1;
        uint256 nftId = funMint;
        require(owner[nftId] == address(0), "already owned"); // sanity check
        owner[nftId] = msg.sender;
        emit MintedFun(nftKind, nftId, tip, msg.sender);
        if (tips[msg.sender] > tips[tipLeader]) {
            tipLeader = msg.sender;
            emit NewTipLeader(msg.sender);
        }
    }
}

