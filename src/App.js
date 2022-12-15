import React from "react";
import picture from "./Assets/picture.png";
import tw from "tailwind-styled-components";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const Container = tw.div`flex flex-column max-w-[30rem] items-center content-between justify-evenly mt-[2rem] ml-auto mb-auto mr-auto border-2 border-solid shadow-xl rounded-3xl h-20 bg-gradient-to-r from-[#0037C5] via-[#04198E] to-[#08005F] text-white
`;
const BookNow = tw.button`rounded-3xl w-[8rem] h-10 border-[1px] border-solid border-white bg-gradient-to-r from-orange-500 via-red-700 to-pink-900 text-white shadow-gray-800
`;
const SubContainer = tw.div`max-w-[30rem]  items-center content-center justify-center mt-10 ml-auto mr-auto bg-[#F0F0F0] rounded-xl shadow-xl
`;
const ButtonTop = tw.div`flex flex-column justify-evenly pb-[1rem] pt-[1rem]
`;
const Button1 = tw.button`rounded-3xl w-[6rem] h-9 border-1 border-solid border-black bg-gradient-to-r from-[#FF8412] to-pink-700 text-white shadow-xl
`;
const TestButton1 = tw.button`rounded-3xl w-[6rem] h-9 border-[1px] border-solid bg-white text-black shadow-xl
`;
const Button2 = tw.button`rounded-3xl w-[6rem] h-9 border-[1px] border-solid shadow-xl bg-white text-black
`;
const ItemsContainer = tw.div`flex flex-column justify-evenly items-center
`;
const DownButton = tw.div`flex flex-column justify-evenly pt-[1rem] pb-[1rem]
`;
const Button3 = tw.button`rounded-3xl w-[8rem] h-7 border-1 border-solid border-black bg-gradient-to-r from-[#A90189] via-[#64067A] to-[#4B0875] text-white
`;
const Button4 = tw.button`rounded-3xl w-[8rem] h-7 border-[1px] border-solid border-black bg-white text-black
`;
const Back = tw.button`flex w-[30rem] h-10 items-center justify-center content-center mt-[2rem] ml-auto mb-[2rem] mr-auto border-solid rounded-2xl bg-[#F0F0F0] drop-shadow-lg
`;
const Text = tw.div`flex flex-column justify-center items-center content-center mt-[1rem] ml-auto mr-auto mb-auto text-2xl
`;

const data = [
  {
    id: 1,
    img: picture,
    date: "17 September",
    time: "9.30 PM",
    appoinment: "Appoinment with Doctor Arun",
    clinic: "Doctor World Clinic",
    testType: "",
  },
  {
    id: 2,
    img: picture,
    date: "17 September",
    time: "9.30 PM",
    appoinment: "Appoinment with Doctor Arun",
    clinic: "Doctor World Clinic",
    testType: "X-Ray",
  },
];

function App() {
  return (
    <div>
      <Text>
        <h2>Upcoming Events</h2>
      </Text>
      <Container>
        <h5>New Booking In 2 Mins</h5>
        <BookNow>Book Now</BookNow>
      </Container>
      <div>
        {data &&
          data.map((items) => (
            <SubContainer>
              <ButtonTop>
                <Button1>Clinic</Button1>

                {items.id == 1 && <TestButton1>Test</TestButton1>}
                {items.id == 2 && <Button1>Test</Button1>}

                <Button2>Surgery</Button2>
                <Button2>Medicine</Button2>
              </ButtonTop>
              <ItemsContainer>
                <div>
                  <img src={items.img} className="h-[100px]" />
                </div>
                <div>
                  <p>{items.date + " , " + items.time}</p>
                  <p className="text-orange-500">{items.appoinment}</p>
                  <p>{items.clinic}</p>
                  <p>{items.testType ? "Test:" + " " + items.testType : ""}</p>
                </div>
              </ItemsContainer>
              <DownButton>
                <Button3>RESCHEDULE</Button3>
                <Button3 className=" rounded-xl w-[8rem] h-7 border-1 border-solid border-black bg-gradient-to-r from-[#A90189] via-[#64067A] to-[#4B0875] text-white">
                  CANCEL
                </Button3>
                <Button4>
                  <VisibilityOutlinedIcon /> VIEW
                </Button4>
              </DownButton>
            </SubContainer>
          ))}
      </div>
      <Back>Back</Back>
    </div>
  );
}

export default App;
