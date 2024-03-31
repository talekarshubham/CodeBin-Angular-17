import { Injectable } from '@angular/core';
import { doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class DbService {
  private db: any;
  constructor(private authService: AuthService,private router:Router) {
    this.db = getFirestore();
  }
  async createSnippet(snippet: any) {
    try {
      const docRef = await addDoc(collection(this.db, 'CodeSnippets'), {
        ...snippet,
        createdby: this.authService.getUid(),
      });
      this.router.navigate(['/'])
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
      console.log(e);
    }
  }

  async getAllSnippet() {
    let results: any[] = [];
    const querySnapshot = await getDocs(collection(this.db, 'CodeSnippets'));
    querySnapshot.forEach((doc) => {
      results.push({ id: doc.id, ...doc.data() });
      console.log(`${doc.id} => ${doc.data()}`);
    });
    return results;
  }
  async getSnippetById(id: any) {
    const docRef = doc(this.db, 'CodeSnippets', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
      return docSnap.data()
    } else {
      // docSnap.data() will be undefined in this case
      console.log('No such document!');
      return null
    }
  }
}
