import { generateDebugFile } from "../api/system";
import { useBoolean } from 'ahooks'
import to from "await-to-js"
const useGenerateDebugFile = () => {
  const [isLoading, { setTrue, setFalse }] = useBoolean();
  const generate = async () => {
    setTrue()
    const [err, res] = await to(generateDebugFile())
    setFalse()
    return [err, res]
  }
  return { isLoading, generate }

}
export default useGenerateDebugFile