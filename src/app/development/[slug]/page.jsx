import developmentServices from "../DevelopmentServices"; // Update to the correct path
import Image from 'next/image'; // Use Image component for optimization

const DevelopmentService = ({ params }) => {
  const { slug } = params; // Extract slug from params

  const service = developmentServices.find((service) => service.id === slug);

  if (!service) {
    return <p>Service not found</p>;
  }

  return (
    <div className="service-area bg-relative pd-top-120 pd-bottom-90"> {/* Applying container styles */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8"> {/* Centering and limiting width */}
            <div className="single-service-inner-2 text-center"> {/* Main service container */}
              
              {/* Image Section */}
              <div className="thumb">
                <Image
                  src={service.image} // Assuming service has an image property
                  alt={service.name}
                  width={500}
                  height={300}
                  className="service-img" // Custom styling for the image
                />
              </div>

              {/* Service Details */}
              <div className="details mt-4"> {/* Applying the same 'details' and margin classes */}
                
                {/* Icon */}
                <div className="icon mb-3"> {/* Icon section */}
                  <Image
                    src={service.icon} // Assuming service has an icon property
                    alt={`${service.name} icon`}
                    width={50}
                    height={50}
                  />
                </div>

                {/* Service Title */}
                <h1 className="mb-3"> {/* Service title styled like in the example */}
                  {service.name}
                </h1>

                {/* Service Description */}
                <p className="mb-4"> {/* Applying similar paragraph styles */}
                  {service.description}
                </p>

                {/* Why Choose Us Section */}
                <p className="mb-4">
                  {service.whyChooseUs}
                </p>

                {/* Contact Text */}
                <p>
                  {service.contactText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentService;
