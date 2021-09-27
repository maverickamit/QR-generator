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
      <h4 className="mt-3">Link</h4>
      <h5 className="mb-3">URL</h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("url", { required: true })} />
        {errors.url && <span>This field is required</span>}
        <input className="btn-primary" type="submit" value="submit" />
      </form>
    </div>
  );
});
export default LinkInput;
