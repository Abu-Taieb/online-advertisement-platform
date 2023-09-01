import logo from '../../assets/logo/logo.png'
const Footer = () => {
  return (
    <footer className="footer p-10 bg-gradient-to-r from-[#4B57F9] to-[#127BD0] text-neutral-content">
      <div>
      <img style={{height: '90px', width: '140px'}} src={logo} alt="" />
        <p className='font-semibold text-lg'>
          Advertise Now For You.
          <br />
          Providing reliable tech since 1992
        </p>
      </div>
      <div>
        <span className="footer-title text-lg font-semibold">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title text-lg font-semibold">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title text-lg font-semibold">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
