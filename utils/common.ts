// import fs from "fs"

// export const writeFile = (
//   filePath: string,
//   content: any,
//   onSuccess?: (data: any) => void,
//   onError?: (error: any) => void,
// ): void => {
//   fs.writeFile(filePath, content, (err) => {
//     if (err) {
//       console.error("Error writing file:", err)
//       onError?.(err)
//     } else {
//       console.log("File written successfully.")
//       const newData = readFile(filePath)
//       onSuccess?.(newData)
//     }
//   })
// }

// export const readFile = (filePath: string): any => {
//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       console.error("Error reading file:", err)
//     } else {
//       return data
//     }
//   })
// }
