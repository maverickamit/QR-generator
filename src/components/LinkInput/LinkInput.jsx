import { useForm } from "react-hook-form";

const LinkInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h2>Link</h2>
      <h3>URL</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("urlLink", { required: true })} />
        {errors.urlLink && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </div>
  );
};
export default LinkInput;
