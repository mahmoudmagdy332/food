import { useLanguageSelector } from "../../app/slices/languageSlice";

const Info = () => {
  const { translations } = useLanguageSelector(
    (state) => state.languageReducer
  );
  return (
    <div className="grid  lg:grid-cols-3 gap-20 my-20">
      <div className="flex flex-col gap-6 items-center">
        <img className="" src="/images/contact/icon (1).svg" />
        <h3 className="font-medium text-2xl text-primary">
          {translations.OurLocation}
        </h3>
        <p className=" text-primary text-center">
          {translations.LocationPhase}
        </p>
      </div>
      <div className="flex flex-col gap-6 items-center">
        <img className="" src="/images/contact/icon (2).svg" />
        <h3 className="font-medium text-2xl text-primary">
          {translations.ContactInfo}
        </h3>
        <p className=" text-primary text-center">
          (+09) - 8587 - 1298 info@upskill.com
        </p>
      </div>
      <div className="flex flex-col gap-6 items-center">
        <img className="" src="/images/contact/icon (3).svg" />
        <h3 className="font-medium text-2xl text-primary">
          {translations.WorkTimer}
        </h3>
        <p className=" text-primary text-center">
          Monday - Friday: 09:00 - 20:00 Sunday & Saturday: 10:30 - 22:00
        </p>
      </div>
    </div>
  );
};

export default Info;
