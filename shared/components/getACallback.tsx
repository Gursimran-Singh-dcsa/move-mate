"use client";

export const GetACallback = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-8 max-w-8xl">
      <h2 className="text-5xl font-extrabold text-center">
        Too Busy to Give Us a Call?
      </h2>
      <p className="text-center">
        Drop your phone number and choose a convenient time — we’ll call you.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.currentTarget.phoneNumber.value);
          if (
            /^(?:02\d{7,9}|\+642\d{7,9})$/.test(
              e.currentTarget.phoneNumber.value,
            )
          ) {
            console.log("Valid phone number");
          } else {
            console.log("Invalid phone number");
          }
        }}
      >
        <div className="flex flex-wrap items-center justify-center gap-6  max-w-8xl px-2">
          <input
            name="date"
            type="date"
            defaultValue={new Date().toLocaleDateString("en-CA")}
            required
            aria-label="Select a date for the callback"
            className="border h-[3rem] border-gray-300 rounded-md px-4 py-2 w-[200px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />

          <select
            name="timeSlot"
            required
            aria-label="Select a callback time"
            className="border h-[3rem] border-gray-300 rounded-md px-4 py-2 w-[200px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Select time</option>
            <option value="10:00-11:00">10:00 AM - 11:00 AM</option>
            <option value="11:00-12:00">11:00 AM - 12:00 PM</option>
            <option value="12:00-13:00">12:00 PM - 1:00 PM</option>
            <option value="13:00-14:00">1:00 PM - 2:00 PM</option>
            <option value="14:00-15:00">2:00 PM - 3:00 PM</option>
            <option value="15:00-16:00">3:00 PM - 4:00 PM</option>
            <option value="16:00-17:00">4:00 PM - 5:00 PM</option>
            <option value="17:00-18:00">5:00 PM - 6:00 PM</option>
          </select>
          <input
            name="phoneNumber"
            required
            type="tel"
            placeholder="+64XXXXXXXXX"
            pattern="^(?:02\d{7,9}|\+642\d{7,9})$"
            title="Enter a valid New Zealand phone number"
            className="border h-[3rem] border-gray-300 rounded-md px-4 py-2 w-[300px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            aria-label="Enter your phone number"
            aria-required="true"
            aria-describedby="phone-number-description"
          />
          <button
            type="submit"
            aria-label="Request a call"
            aria-describedby="request-call-description"
            className="cursor-pointer bg-primary h-[3rem] px-10 text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition-colors duration-300"
          >
            Request A Call
          </button>
        </div>
      </form>
    </div>
  );
};
