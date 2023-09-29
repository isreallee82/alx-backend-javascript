export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}

// export const response = await uploadPhoto().catch((err) => { err = new Error(`${filename} cannot be processed`); });

// async function uploadPhoto() {
//     try {
//       const z = await Promise.reject(30);
//     } catch (e) {
//       console.error(e); // 30
//     }
//   }
