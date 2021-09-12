import { useForm } from "react-hook-form";
import { observer } from "mobx-react-lite"; // Or "mobx-react".

const LinkInput = observer(({ userStore }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => userStore.setLinkUrl(data.url);
  return (
    <div>
      <h2>Link</h2>
      <h3>URL</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("url", { required: true })} />
        {errors.url && <span>This field is required</span>}
        <input className="btn-primary" type="submit" value="submit" />
      </form>
    </div>
  );
});
export default LinkInput;
