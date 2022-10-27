export const useDarkMode = () => {
  const isDarkMode = useState("darkMode",()=>true)

  return {isDarkMode}
  
}


export default useDarkMode;