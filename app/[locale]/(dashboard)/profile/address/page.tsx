"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from "react";
import { addAddressAction } from "../../../../../actions";
import ProfileAddyDisplay from "../../../../../components/Profile/profileAddyDisplay";

const ProfileAddress = () => {
  const { user } = useUser();
  const [formData, setFormData] = useState({
    firstName: "",
    sub: "",
    lastName: "",
    country: "",
    city: "",
    streetAddress: "",
    postalCode: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    streetAddress: "",
    postalCode: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    if (user && user.sub) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        sub: user.sub || "",
      }));
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    const newErrors: any = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key as keyof typeof formData]) {
        newErrors[key] = "This field is required";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    addAddressAction(formData);
  };

  return (
    <div className="profile-form">
      <h1 className="address-title">Shipping Address</h1>
      <ProfileAddyDisplay />
      <div className="profile-address">
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <h2>First Name</h2>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <div className="error">{errors.firstName}</div>
              )}
            </div>
            <div>
              <h2>Last Name</h2>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <div className="error">{errors.lastName}</div>
              )}
            </div>
          </div>
          <h2>Country / Region</h2>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
          {errors.country && <div className="error">{errors.country}</div>}
          <h2>City Name</h2>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && <div className="error">{errors.city}</div>}
          <h2>Street Address</h2>
          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
          />
          {errors.streetAddress && (
            <div className="error">{errors.streetAddress}</div>
          )}
          <h2>Postal / ZIP Code</h2>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
          />
          {errors.postalCode && (
            <div className="error">{errors.postalCode}</div>
          )}
          <h2>Phone</h2>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <div className="error">{errors.phone}</div>}
          <h2>Email Address</h2>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
          <button type="submit">Add Address</button>
        </form>
      </div>
    </div>
  );
};

export default ProfileAddress;
