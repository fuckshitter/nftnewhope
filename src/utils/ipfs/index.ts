import { NFTStorage } from "nft.storage";
/** Utility functions to store and query file(s) status on FileCoin IPFS */

export default () => {
  const client = new NFTStorage({
    token: process.env.REACT_APP_NFT_STORAGE_API_KEY,
  });

  /**
   *
   * @param file
   * @returns Promise<CIDString>
   */
  const singleFile = async (file: any) => {
    return await client.storeBlob(file);
  };

  /**
   *
   * @param files
   * @returns Promise<CIDString>
   */
  const multiFiles = async (files: any) => {
    return await client.storeDirectory(files);
  };

  /**
   *
   * @param cid
   * @returns Promise<Data>
   */
  const getStatus = async (cid: string) => {
    return await client.status(cid);
  };

  return {
    getStatus,
    multiFiles,
    singleFile,
  };
};
