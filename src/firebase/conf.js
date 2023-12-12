const conf={
    apiKey: String(import.meta.env.apiKey),
    authDomain: String(import.meta.env.authDomain),
    projectId: String(import.meta.env.projectId),
    storageBucket: String(import.meta.env.storageBucket),
    messagingSenderId: String(import.meta.env.messagingSenderId),
    appId: String(import.meta.env.appId),
    measurementId: String(import.meta.env.measurementId),
}

export default conf;