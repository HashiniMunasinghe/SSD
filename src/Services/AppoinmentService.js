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

const appoinmentCollectionRef = collection(db, "appoinments");
class appoinmentDataService {

  addAppoinment= (newAppoinment) => {
    return addDoc(appoinmentCollectionRef, newAppoinment);
  };

  updateDoctor = (id, updatedDoctor) => {
    const doctorDoc = doc(db, "doctors", id);
    return updateDoc(doctorDoc, updatedDoctor);
  };

  deleteAppoinment = (id) => {
    const appoinmentDoc = doc(db, "appoinments", id);
    return deleteDoc(appoinmentDoc);
  };

  getAllAppoinments = () => {
    return getDocs(appoinmentCollectionRef);
  };

  getStudent = (id) => {
    const studentDoc = doc(db, "students", id);
    return getDoc(studentDoc);
  };
}

export default new appoinmentDataService();