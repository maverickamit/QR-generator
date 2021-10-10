import { useForm } from "react-hook-form";
import { observer } from "mobx-react-lite"; // Or "mobx-react".

const WifiInput = observer(({ userStore }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
    userStore.setQrData(
      `WIFI:T:${data.networktype};S:${data.networkname};P:${data.password};;
`
    );
  return (
    <div>
      <h4 className="mt-3">Wifi</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="networkname">Network name</label>
        <input {...register("networkname", { required: true })} />
        {errors.networkname && <span>This field is required</span>}
        <label htmlFor="networktype">Network type</label>
        <select
          class="form-select custom-select"
          name="networktype"
          {...register("networktype")}
        >
          <option value="WEP">WEP</option>
          <option value="WPA">WPA/WPA2</option>
          <option value="">No encryption</option>
        </select>
        <label htmlFor="password">Password</label>
        <input {...register("password")} />
        <input className="btn-primary" type="submit" value="submit" />
      </form>
    </div>
  );
});
export default WifiInput;
