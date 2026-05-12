import { DoctorDetailResponse } from '../../infrastructure/dto/doctorDetails.dto';

interface props {
  doctor: DoctorDetailResponse;
}
const EducationSection = ({ doctor }: props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {doctor?.doctorCertifications?.map((edu, i) => (
        <div
          key={i}
          className="border border-gray-200 p-2 rounded-lg text-sm text-gray-800 hover:shadow-sm transition"
        >
          <p>
            <b>{edu.certificateName}</b> - {edu.issuingOrganization}
          </p>
        </div>
      ))}
    </div>
  );
};

export default EducationSection;
