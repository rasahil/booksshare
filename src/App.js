import Header from "./Components/Header";
import ContactUs from "./Components/ContactUs";
import BookStore from "./Components/BookStore";
import DonorForm from "./Components/DonorForm";
import BookSellForm from "./Components/BookSellForm";
import Address from "./Components/Address";



function App() {
  return (
    <div>
      <Header />


      <ContactUs />
      <BookStore/>
     
      <DonorForm/>
      <BookSellForm/>
      <Address/>
     
      
    </div>
  );
}

export default App;
