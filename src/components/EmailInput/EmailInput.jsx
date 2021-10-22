import { useForm } from "react-hook-form";
import { observer } from "mobx-react-lite"; // Or "mobx-react".

const EmailInput = observer(({ userStore }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
    userStore.setQrData(
      `mailto:${data.sendto}?subject=${data.subject}&body=${data.text}`
    );
  return (
    <div>
      <h4 className="mt-3">Email</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={
        userStore.darkMode !== true
          ? "text-dark"
          : ""
      }
      htmlFor="sendto">Send To</label>
        <input {...register("sendto", { required: true })} />
        {errors.sendto && <span>This field is required</span>}
        <label className={
        userStore.darkMode !== true
          ? "text-dark"
          : "" 
        }
        htmlFor="subject">Subject</label>
        <input {...register("subject")} />
        <label className={
        userStore.darkMode !== true
          ? "text-dark"
          : "" 
        } 
        htmlFor="text">Text</label>
        <input {...register("text")} />
        <input className="btn-primary" type="submit" value="submit" />
      </form>
    </div>
  );
});
export default EmailInput;
