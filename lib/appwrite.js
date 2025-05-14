import { Client, Account, Databases, Avatars } from "react-native-appwrite";

export const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("682376470006dc2c75b9")
  .setPlatform("com.giorgi.shelfie");


export const account = new Account(client);
export const database = new Databases(client);
export const avatars = new Avatars(client);
