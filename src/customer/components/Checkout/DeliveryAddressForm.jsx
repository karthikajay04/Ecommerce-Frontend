import Grid from "@mui/material/Grid";
import React from "react";
import { AddressCard } from "../AddressCard/AddressCard";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const DeliveryAddressForm = () => {
  const handleSubmit=(e)=>{
    e.preventDefault();
    
    const data=new FormData(e.currentTarget);
    const address={
      firstName:data.get("firstName"),
      lastName:data.get("lastName"),
      streetaddress:data.get("address"),
      city:data.get("city"),
      state:data.get("state"),
      zipCode:data.get("zip"),
      mobile:data.get("phonenumber"),

    }
    console.log("Address",address);
    
  }
  return (
   <div className="flex flex-col lg:flex-row gap-6 text-left">
  {/* Left Side - Address List */}
  <div className="w-full lg:w-5/12 border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll text-left">
    <div className="p-5 py-7 border-b cursor-pointer text-left">
      <AddressCard />
      <Button
        sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
        size="large"
        variant="contained"
      >
        Deliver Here
      </Button>
    </div>
  </div>

  {/* Right Side - Address Form */}
  <div className="w-full lg:w-7/12 text-left">
    <div className="border rounded-s-md shadow-md p-5 text-left">
      <form onSubmit={handleSubmit} className="text-left">
        {/* Name fields */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1 text-left">
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
            />
          </div>
          <div className="flex-1 text-left">
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="given-name"
            />
          </div>
        </div>

        {/* Address */}
        <div className="pt-5 text-left">
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="given-name"
            multiline
            rows={4}
          />
        </div>

        {/* City + State */}
        <div className="flex flex-col sm:flex-row gap-6 pt-5">
          <div className="flex-1 text-left">
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="given-name"
            />
          </div>
          <div className="flex-1 text-left">
            <TextField
              required
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth
              autoComplete="given-name"
            />
          </div>
        </div>

        {/* Zip + Phone */}
        <div className="flex flex-col sm:flex-row gap-6 pt-5">
          <div className="flex-1 text-left">
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip/Postal Code"
              fullWidth
              autoComplete="shipping postal-code"
            />
          </div>
          <div className="flex-1 text-left">
            <TextField
              required
              id="phonenumber"
              name="phonenumber"
              label="Phone Number"
              fullWidth
              autoComplete="given-name"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-5 text-left">
          <Button
            sx={{ py: 1.5, mt: 2, bgcolor: "RGB(145 85 253)" }}
            size="large"
            variant="contained"
            type="submit"
          >
            Deliver Here
          </Button>
        </div>
      </form>
    </div>
  </div>
</div>


  );
};
