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
      <h5 className="mb-3">Message</h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("message", { required: true })} />
        {errors.url && <span>This field is required</span>}
        <input className="btn-primary" type="submit" value="submit" />
      </form>
    </div>
  );
});
export default TextInput;
