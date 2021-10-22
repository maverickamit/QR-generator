import { useForm } from "react-hook-form";
import { observer } from "mobx-react-lite"; // Or "mobx-react".

const PaypalInput = observer(({ userStore }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
    userStore.setQrData(
      `https://www.paypal.com/cgi-bin/webscr?cmd=${data.pp_type}&business=${data.email}&item_name=${data.item_name}&amount=${data.item_price}&currency_code=${data.currency}&shipping=${data.shipping}&tax_rate=${data.tax_rate}&button_subtype=services&bn=PP-BuyNowBF%3Abtn_buynow_LG.gif%3ANonHostedGuest&lc=US&no_note=0`
    );
  return (
    <div>
      <h4 className="mt-3">PayPal</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label
          className={userStore.darkMode !== true ? "text-dark" : ""}
          htmlFor="pp_type"
        >
          Payment type
        </label>
        <select
          class="form-select custom-select"
          name="pp_type"
          id="pp_type"
          {...register("pp_type")}
        >
          <option value="_xclick">Buy now</option>
          <option value="_cart">Add to cart</option>
          <option value="_donations">Donations</option>
        </select>
        <label
          className={userStore.darkMode !== true ? "text-dark" : ""}
          htmlFor="email"
        >
          E-mail
        </label>
        <input {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}
        <label
          className={userStore.darkMode !== true ? "text-dark" : ""}
          htmlFor="item_name"
        >
          Item name
        </label>
        <input {...register("item_name", { required: true })} />
        {errors.item_name && <span>This field is required</span>}
        <label
          className={userStore.darkMode !== true ? "text-dark" : ""}
          htmlFor="item_id"
        >
          Item id
        </label>
        <input {...register("item_id")} />
        <label
          className={userStore.darkMode !== true ? "text-dark" : ""}
          htmlFor="item_price"
        >
          Price
        </label>
        <input {...register("item_price")} />
        <label
          className={userStore.darkMode !== true ? "text-dark" : ""}
          htmlFor="currency"
        >
          Currency
        </label>
        <select
          class="form-select custom-select setvalue"
          name="pp_currency"
          id="setcurrency"
          data-target="#getcurrency"
          {...register("currency")}
        >
          <option value="USD">United States dollar</option>
          <option value="EUR">Euro</option>
          <option value="AUD">Australian dollar</option>
          <option value="BRL">Brazilian real</option>
          <option value="CAD">Canadian dollar</option>
          <option value="CNY">Chinese Renmenbi</option>
          <option value="CZK">Czech koruna</option>
          <option value="DKK">Danish krone</option>
          <option value="HKD">Hong Kong dollar</option>
          <option value="HUF">Hungarian forint</option>
          <option value="INR">Indian rupee</option>
          <option value="ILS">Israeli new shekel</option>
          <option value="JPY">Japanese yen</option>
          <option value="MYR">Malaysian ringgit</option>
          <option value="MXN">Mexican peso</option>
          <option value="TWD">New Taiwan dollar</option>
          <option value="NZD">New Zealand dollar</option>
          <option value="NOK">Norwegian krone</option>
          <option value="PHP">Philippine peso</option>
          <option value="PLN">Polish złoty</option>
          <option value="GBP">Pound sterling</option>
          <option value="RUB">Russian ruble</option>
          <option value="SGD">Singapore dollar</option>
          <option value="SEK">Swedish krona</option>
          <option value="CHF">Swiss franc</option>
          <option value="THB">Thai baht</option>
        </select>
        <label
          className={userStore.darkMode !== true ? "text-dark" : ""}
          htmlFor="shipping"
        >
          Shipping
        </label>
        <input {...register("shipping")} />
        <label
          className={userStore.darkMode !== true ? "text-dark" : ""}
          htmlFor="tax_rate"
        >
          Tax rate
        </label>
        <input {...register("tax_rate")} />
        <input className="btn-primary" type="submit" value="submit" />
      </form>
    </div>
  );
});
export default PaypalInput;
