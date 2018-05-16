import * as CryptoJS from "crypto-js";

class Block {
  static calculateBlockHash = (
    index: number,
    previouseHash: string,
    timestamp: number,
    data: string
  ): string => {
    return CryptoJS.SHA256(index + previouseHash + timestamp + data).toString();
  };

  public index: number;
  public;
}
