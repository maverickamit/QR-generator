import { useForm } from "react-hook-form";
import { observer } from "mobx-react-lite"; // Or "mobx-react".

const TextInput = observer(({ userStore }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => userStore.setQrData(data.message);

  return (
    <div>
      <h4 className="mt-3">Text</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={
        userStore.darkMode !== true
          ? "text-dark"
          : "" 
        } 
        htmlFor="message">Message</label>
        <input {...register("message", { required: true })} />
        {errors.message && <span>This field is required</span>}
        <input className="btn-primary" type="submit" value="submit" />
      </form>
    </div>
  );
});
export default TextInput;
