"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from "react";
import { addAddressAction } from "../../../../../actions";
import ProfileAddyDisplay from "../../../../../components/Profile/profileAddyDisplay";
import { useScopedI18n } from "../../../../../locales/client";

const ProfileAddress = () => {
  const { user } = useUser();
  const t = useScopedI18n("profile");
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

  useEffect(() => {
    if (user && user.email) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        email: user.email || "",
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
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  return (
    <div className="profile-form">
      <h1 className="address-title">{t("address")}</h1>
      <ProfileAddyDisplay />
      <div className="profile-address">
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <h2>{t("firstName")}</h2>
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
              <h2>{t("lastName")}</h2>
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
          <h2>{t("countryRegion")}</h2>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
          {errors.country && <div className="error">{errors.country}</div>}
          <h2>{t("cityName")}</h2>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && <div className="error">{errors.city}</div>}
          <h2>{t("streetAddy")}</h2>
          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
          />
          {errors.streetAddress && (
            <div className="error">{errors.streetAddress}</div>
          )}
          <h2>{t("postalZipCode")}</h2>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
          />
          {errors.postalCode && (
            <div className="error">{errors.postalCode}</div>
          )}
          <h2>{t("number")}</h2>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <div className="error">{errors.phone}</div>}
          {user?.email && <button type="submit">{t("addAddress")}</button>}
        </form>
      </div>
    </div>
  );
};

export default ProfileAddress;
