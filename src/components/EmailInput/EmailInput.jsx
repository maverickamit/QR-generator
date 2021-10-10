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
        <label htmlFor="sendto">Send To</label>
        <input {...register("sendto", { required: true })} />
        {errors.sendto && <span>This field is required</span>}
        <label htmlFor="subject">Subject</label>
        <input {...register("subject")} />
        <label htmlFor="text">Text</label>
        <input {...register("text")} />
        <input className="btn-primary" type="submit" value="submit" />
      </form>
    </div>
  );
});
export default EmailInput;
