import { db } from "../firebase";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const doctorCollectionRef = collection(db, "doctors");
class doctorDataService {

  addDoctor= (newDoctor) => {
    return addDoc(doctorCollectionRef, newDoctor);
  };

  updateDoctor = (id, updatedDoctor) => {
    const doctorDoc = doc(db, "doctors", id);
    return updateDoc(doctorDoc, updatedDoctor);
  };

  deleteDoctor = (id) => {
    const doctorDoc = doc(db, "doctors", id);
    return deleteDoc(doctorDoc);
  };

  getAllDoctor = () => {
    return getDocs(doctorCollectionRef);
  };

  getStudent = (id) => {
    const studentDoc = doc(db, "students", id);
    return getDoc(studentDoc);
  };
}

export default new doctorDataService();