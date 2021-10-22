import { useForm } from "react-hook-form";
import { observer } from "mobx-react-lite"; // Or "mobx-react".

const LinkInput = observer(({ userStore }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => userStore.setQrData(data.url);
  return (
    <div>
      <h4 className="mt-3">Link</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={
        userStore.darkMode !== true
          ? "text-dark"
          : "" 
        } 
        htmlFor="url">URL</label>
        <input {...register("url", { required: true })} />
        {errors.url && <span>This field is required</span>}
        <input className="btn-primary" type="submit" value="submit" />
      </form>
    </div>
  );
});
export default LinkInput;
