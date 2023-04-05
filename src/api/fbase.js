import { initializeApp } from "firebase/app";
import {
	getAuth,
	signOut,
	GoogleAuthProvider,
	signInWithPopup,
	setPersistence,
	browserSessionPersistence,
	onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";

const {
	VITE_FIREBASE_API_KEY,
	VITE_FIREBASE_AUTH_DOMAIN,
	VITE_FIREBASE_DATABASE_URL,
	VITE_FIREBASE_PROJECT_ID,
	VITE_FIREBASE_STORAGE_BUCKET,
	VITE_FIREBASE_SENDER_ID,
	VITE_FIREBASE_APP_ID,
	VITE_FIREBASE_MEASUREMENT_ID,
} = import.meta.env;

const firebaseConfig = {
	apiKey: VITE_FIREBASE_API_KEY,
	authDomain: VITE_FIREBASE_AUTH_DOMAIN,
	databaseURL: VITE_FIREBASE_DATABASE_URL,
	projectId: VITE_FIREBASE_PROJECT_ID,
	storageBucket: VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: VITE_FIREBASE_SENDER_ID,
	appId: VITE_FIREBASE_APP_ID,
	measurementId: VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

const login = () => {
	setPersistence(auth, browserSessionPersistence)
		.then(() => {
			const provider = new GoogleAuthProvider();
			provider.setCustomParameters({ prompt: "select_account" });
			signInWithPopup(auth, provider)
				.then((data) => {
					return data.user;
				})
				.catch((err) => {
					console.log(err);
				});
		})
		.catch((error) => {
			console.log(error);
		});
};

const logout = async () => {
	signOut(auth).then(() => null);
};

// admin 권한
const adminUser = async (user) => {
	return get(ref(database, "admin")).then((snapshot) => {
		if (snapshot.exists()) {
			const admins = snapshot.val(); // realtime db 에 추가한 admin 값 가져오기
			const isAdmin = admins.includes(user.uid);
			return { ...user, isAdmin };
		}
		return user;
	});
};

// 로그인 정보 유지를 위한 함수
const onUserStateChange = (callback) => {
	onAuthStateChanged(auth, async (user) => {
		const updateUser = user ? await adminUser(user) : null;
		callback(updateUser);
	});
};

export { app, auth, database, login, logout, onUserStateChange };
