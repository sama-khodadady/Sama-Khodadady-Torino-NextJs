"use client";

import { useState } from "react";
import { e2p } from "@/utils/numbers";
import { icons } from "@/constants/icons";
import EditForm from "@/ui/molecule/EditForm";
import { persianDateFormat } from "@/utils/time";
import styles from "@/ui/molecule/PersonalData.module.css";

function PersonalData({ profile }) {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className={styles.personalData}>
      <h1> {isEdit ? "ویرایش اطلاعات شخصی" : "اطلاعات شخصی"} </h1>
      {isEdit ? (
        <EditForm setIsEdit={setIsEdit} profile={profile} />
      ) : (
        <div className={styles.personalInfo}>
          <div className={styles.nameInfo}>
            <div className={styles.name}>
              <p>نام و نام خانوادگی</p>
              <span>
                {!!profile?.firstName && !!profile?.firstName
                  ? `${profile?.firstName} ${profile?.lastName}`
                  : "--"}
              </span>
            </div>
            <div className={styles.code}>
              <p>کدملی</p>
              <span>
                {!!profile?.nationalCode ? e2p(profile?.nationalCode) : "--"}
              </span>
            </div>
          </div>
          <div className={styles.birthInfo}>
            <div className={styles.gender}>
              <p>جنسیت</p>
              <span>
                {!!profile?.gender
                  ? profile?.gender === "female"
                    ? "زن"
                    : "مرد"
                  : "--"}
              </span>
            </div>
            <div className={styles.birthDate}>
              <p>تاریخ تولد</p>
              <span>
                {!!profile?.birthDate
                  ? persianDateFormat(profile?.birthDate).simpleFormat
                  : "--"}
              </span>
            </div>
          </div>
          <button onClick={() => setIsEdit(true)} className={styles.edit}>
            {icons.edit}
            ویرایش اطلاعات
          </button>
        </div>
      )}
    </div>
  );
}

export default PersonalData;
