import { IoArrowBack, IoCloseOutline } from "react-icons/io5";
import { ButtonMiscelleneous } from "./buttons";
import { PortalModal } from "~/portal/portal.index";
import { useCallback, useMemo, useState, type FormEvent } from "react";
import { useFetcher } from "react-router";
import InputForm from "./forms/InputForm.form";
import { MdSubdirectoryArrowLeft } from "react-icons/md";

type RequestADemoForm = {
    closeRequestADemoFormCallToAction:()=>void
}
/**
 * 
 * @param closeRequestADemoFormCallToAction 
 * @returns 
 */
export default function RequestADemoForm({closeRequestADemoFormCallToAction}:RequestADemoForm){
    const formData = new FormData()
    const fetcher = useFetcher()
    const [requiredField, setRequiredField]=useState(false)
    const [ requestDemoFormData, setRequestDemoFormData] = useState({
        name: "",
        email: "",
        mobileNumber: "",
        schoolName:"",
        schoolAddress:""
    });
    //Loading status
    const fetcherIsBusy = useMemo(() => fetcher.state === 'idle' ? false : true,[fetcher.state])

    /**
     * Handle User Input
     * @param event 
     */
    const handleChangeFn = useCallback((event: { target: { name: string, value: string}}) => {
        setRequestDemoFormData((prevState) => ({...prevState, [event.target.name]:event.target.value}))
    },[])

    /**
     * 
     * @param event 
     * @returns 
     */
    const submitRequestDemoFormDataFn = (event:FormEvent) => {
        event.preventDefault()
        const {name, email, mobileNumber, schoolName, schoolAddress} = requestDemoFormData
        if(!name || !email || !mobileNumber || !schoolName || !schoolAddress)return setRequiredField(true)
        return
    }
    return(
        <PortalModal portalHeight="h-screen">
            <section className="relative flex flex-col justify-between bg-white w-[60vw] font-semibold text-[#31859c] p-5 gap-5">
                <div className="flex justify-between items-center px-5">
                    <div className="flex items-center text-lg text-gray-800 p-5 bg-[#f8f9f3] rounded-2xl gap-5">
                        Product Demo 
                    </div>
                    <ButtonMiscelleneous
                        buttonIcon={<MdSubdirectoryArrowLeft fontSize={24}/>}
                        buttonTitle={"Close"}
                        buttonType="button"
                        borderRadius="rounded-3xl"
                        className="bg-black text-white h-14"
                        disabled={fetcherIsBusy}
                        callToActionFn={closeRequestADemoFormCallToAction}
                    />
                </div>
                <form onSubmit={submitRequestDemoFormDataFn} action="" className="w-full flex flex-col gap-3 px-20">
                    <InputForm
                        inputId="schoolName_form_input"
                        labelTitle="School Name*"
                        name="schoolName"
                        inputType="text"
                        isTextArea={false}
                        handleChangeFn={handleChangeFn}
                        required={requiredField && !requestDemoFormData.schoolAddress}
                        disabled={fetcherIsBusy}
                    />
                    <InputForm
                        inputId="address_form_input"
                        labelTitle="School Address*"
                        name="schoolAddress"
                        inputType="text"
                        isTextArea={false}
                        handleChangeFn={handleChangeFn}
                        required={requiredField && !requestDemoFormData.schoolAddress}
                        disabled={fetcherIsBusy}
                    />
                    <InputForm
                        inputId="name_form_input"
                        labelTitle="Contact Person Name*"
                        name="name"
                        inputType="text"
                        isTextArea={false}
                        handleChangeFn={handleChangeFn}
                        required={requiredField && !requestDemoFormData.name}
                        disabled={fetcherIsBusy}
                    />
                    <div className="flex gap-5 pb-5">
                        <InputForm
                            inputId="mobileNumber_form_input"
                            labelTitle="Contact Person Phone Number*"
                            name="mobileNumber"
                            inputType="text"
                            isTextArea={false}
                            handleChangeFn={handleChangeFn}
                            required={requiredField && !requestDemoFormData.mobileNumber}
                            disabled={fetcherIsBusy}
                        />
                        <InputForm
                            inputId="email_form_input"
                            labelTitle="Contact Person Email*"
                            name="email"
                            inputType="text"
                            isTextArea={false}
                            handleChangeFn={handleChangeFn}
                            required={requiredField && !requestDemoFormData.email}
                            disabled={fetcherIsBusy}
                        />
                    </div>
                    <ButtonMiscelleneous
                        buttonType="submit"
                        buttonTitle="Submit"
                        borderRadius="rounded-3xl"
                        widthClass="w-full"
                        className=" bg-[#31859c] text-white px-4 py-2"
                        disabled={true}
                    />
                </form>
            </section>
        </PortalModal>
    )
}