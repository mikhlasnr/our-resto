import React from "react";

import { Avatar, Image } from "antd";

const AdminPegawaiTableProfile = ({ text, record }) => {
  return (
    <div className="table-pegawai-profile-container">
      <Avatar
        size={44}
        src={
          <Image
            width={44}
            src={
              record.Foto ||
              "https://ik.imagekit.io/upecbxjan8p/avatar/empty-image_6J-Ssa71Q.png"
            }
            preview={{
              visible: false,
              mask: null,
            }}
            fallback="https://ik.imagekit.io/upecbxjan8p/avatar/empty-image_6J-Ssa71Q.png"
          />
        }
        style={{ backgroundColor: "#FFB649", borderRadius: "20px" }}
      />
      <p>{text}</p>
    </div>
  );
};

export default AdminPegawaiTableProfile;
