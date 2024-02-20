import {
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useAddTransaction = () => {
  const transactionCollectionRef = collection(db, "transactions");
  const { userID } = useGetUserInfo();

  const addTransaction = async ({
    description,
    transactionAmount,
    transactionType,
  }) => {
    await addDoc(transactionCollectionRef, {
      userID,
      description,
      transactionAmount,
      transactionType,
      createdAt: serverTimestamp(),
    });
  };

  const resetTransactions = async () => {
    // Get all transactions for the current user
    const userTransactionsQuery = query(
      transactionCollectionRef,
      where("userID", "==", userID)
    );
    const userTransactionsSnapshot = await getDocs(userTransactionsQuery);

    // Delete each transaction
    const deletePromises = userTransactionsSnapshot.docs.map(async (doc) => {
      await deleteDoc(doc.ref);
    });

    await Promise.all(deletePromises);
  };

  return { addTransaction, resetTransactions };
};
