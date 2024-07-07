import LoginForm from "./loginForm";
import Debouncer from "./components/debouncer";
import PhoneNumberInput from "./components/phoneNumberInput";

function App()
{
  return(
    <>
      <LoginForm></LoginForm>

      <Debouncer></Debouncer>

      <PhoneNumberInput></PhoneNumberInput>
    </>
  )
}
export default App;