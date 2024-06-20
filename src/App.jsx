import Heading from "./components/Heading";
import TextBox from "./components/textbox";
import Buttns from "./components/buttons"
const Div = () => {
  const arr = ["C", "1", "2", "+","C", "1", "2", "+","C", "1", "2", "+","C", "1", "2", "+","C", "1", "2", "+"];
  return (<>
    <Heading pagename={"Calculator"} />
    <div className="flex flex-col justify-start items-center mx-auto border-2 border-gray-500 bg-gray-100 h-[420px] lg:h-[400px] w-[420px] lg:w-[400px] px-4 rounded">
      <TextBox />
      <div className="w-2/3 h-full flex flex-row flex-wrap p-4 justify-center items-center gap-1.5">
        {arr.map((item, index) => {
          return <Buttns key={index} btn_name={item} />;
        })}
      </div>
    </div>
  </>
  );
};

export default Div;