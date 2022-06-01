import { db } from "./firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, addDoc } from "firebase/firestore";

export const api = {
  async getToken(body) {
    const { email, password } = body;
    try {
      const auth = getAuth();
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      return user;
    } catch (error) {
      const messages = {
        "auth/user-not-found": "사용자를 찾을 수 없습니다.",
        "auth/wrong-password": "이메일 혹은 비밀번호가 일치하지 않습니다.",
      };
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log({ errorCode, errorMessage });
      window.alert(messages[errorCode] || "알 수 없는 오류로 로그인에 실패했습니다.");
    }
  },

  async getItems(body) {
    try {
      const ref = collection(db, "happiness");
      const querySnapshot = await getDocs(ref, body);

      const data = [];
      if (querySnapshot) {
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  async postItem(body) {
    // Add a new document in collection "cities
    try {
      const ref = collection(db, "happiness");
      const data = await addDoc(ref, body);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
