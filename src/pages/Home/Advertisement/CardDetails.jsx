import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa"; // Import social icons

const CardDetails = () => {
  const { id } = useParams();

  const [adDetails, setAdDetails] = useState({});

  useEffect(() => {
    fetch(`advertisement.json/${id}`)
      .then((res) => res.json())
      .then((data) => setAdDetails(data));
  }, [id]);

  return (
    <section className="pt-44 pb-20">
      <div className="container mx-auto">
        <div className="card border lg:card-side bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <img
                  src="https://avantage.bold-themes.com/hr/wp-content/uploads/sites/5/2019/04/img-team.png"
                  alt={adDetails.name}
                  className="w-full object-cover"
                />
              </div>

              <div className="col-span-2">
                <h2 className="card-title text-3xl font-bold mb-6">
                  {adDetails.title}
                </h2>
                <p className="text-lg mb-1">{adDetails.description}</p>
                <p className="text-lg mb-1">Rating: {adDetails.rating}</p>
                <p className="text-lg mb-1">
                  Location: {adDetails.city}, {adDetails.state},{" "}
                  {adDetails.country}
                </p>

                <p className="text-lg mb-1">Email: {adDetails.email}</p>
                <p className="text-lg mb-1">Phone: {adDetails.phone}</p>

                <p className="text-lg mb-1">Address:</p>
                <address>
                  {adDetails.street}, {adDetails.city}, {adDetails.state},{" "}
                  {adDetails.country}, {adDetails.postal_code}
                </address>

                {/* Social Icons */}
                <div className="flex my-4">
                  <a target="_blank" href={adDetails.twitter} className="mr-3">
                    <FaTwitter size={26} color="#00acee " />
                  </a>
                  <a target="_blank" href={adDetails.linkedin} className="mr-3">
                    <FaLinkedin size={26} color="#0A66C2" />
                  </a>
                  <a target="_blank" href={adDetails.facebook} className="mr-3">
                    <FaFacebook size={26} color="#3b5998" />
                  </a>
                  <a
                    target="_blank"
                    href={adDetails.instagram}
                    className="mr-3"
                  >
                    <FaInstagram size={26} color="#0A66C2" />
                  </a>
                </div>

                {/* CTA Button */}
                <Link to={'/'}
                  href={adDetails.website}
                  className="btn bg-orange-500 hover:bg-orange-600 text-white mt-4"
                >
                  See more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardDetails;
