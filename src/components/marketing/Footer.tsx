import { Linkedin, Github } from "lucide-react";

// Weaave Logo
const WeaaveLogo = () => (
	<svg width="80" height="20" viewBox="0 0 130 32" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M16.4 0H9.8L6.6 12.3L3.4 0H0L5 19.2H8.2L11.4 6.9L14.6 19.2H17.8L22.8 0H19.4L16.4 12.3L16.4 0Z" fill="currentColor" />
		<path d="M33.2 19.2H43.6V16.4H36.6V11.1H42.8V8.3H36.6V2.8H43.6V0H33.2V19.2Z" fill="currentColor" />
		<path d="M58.8 19.2L57.2 15.4H50.6L49 19.2H45.4L52.2 0H55.6L62.4 19.2H58.8ZM53.9 7.6L51.8 12.7H56.1L53.9 7.6Z" fill="currentColor" />
		<path d="M68.2 19.2L73.8 0H70.2L64.6 19.2H68.2Z" fill="currentColor" />
		<path d="M81.4 11.6L87.4 0H83.6L77.6 11.6L81.4 11.6Z" fill="currentColor" />
		<path d="M92.4 0L86.4 11.6L82.6 19.2H86.2L96.2 0H92.4Z" fill="currentColor" />
	</svg>
);

// W Logo icon
const WLogoIcon = () => (
	<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M8 6L12 26H14L16 14L18 26H20L24 6H22L19 22L17 10H15L13 22L10 6H8Z" fill="currentColor" />
	</svg>
);

const Footer = () => {
	const socialLinks = [
		{ icon: Github, href: "https://github.com/akshithdh" },
		{ icon: Linkedin, href: "https://www.linkedin.com/in/akshitxdhiman/" },
	];

	const footerLinks = {
		getStarted: [
			{ label: "REQUEST A DEMO", href: "#" },
			{ label: "PRICING", href: "#" },
			{ label: "ENTERPRISE", href: "#" },
		],
		company: [
			{ label: "ABOUT", href: "#" },
			{ label: "CAREERS", href: "#" },
			{ label: "TRUST", href: "#" },
			{ label: "TERMS", href: "#" },
			{ label: "PRIVACY", href: "#" },
		],
		connect: [{ label: "COLLECTIVE", href: "#" }],
		resources: [{ label: "KNOWLEDGE CENTER", href: "#" }],
	};

	return (
		<footer className="bg-[#111111] pt-16 md:pt-24 overflow-hidden relative z-10">
			{/* Main sage-colored container */}
			<div className="bg-[#A8B3A4] rounded-tr-[60px] md:rounded-tr-[100px] px-6 md:px-16 lg:px-24 pt-20 md:pt-28 pb-8 text-white relative">
				{/* Content wrapper */}
				<div className="max-w-[1400px] mx-auto w-full">
					{/* Headline Section */}
					<div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 mb-28 md:mb-40">
						<h2 className="text-[clamp(3rem,8vw,5.5rem)] font-normal leading-[0.95] tracking-[-0.02em] text-white">
							Artificial
							<br />
							Intelligence
						</h2>
						<span className="text-[clamp(2rem,5vw,4rem)] font-extralight text-white/70 hidden md:block">+</span>
						<h2 className="text-[clamp(3rem,8vw,5.5rem)] font-normal leading-[0.95] tracking-[-0.02em] text-white">
							Human
							<br />
							Creativity
						</h2>
					</div>

					{/* Logo & Description Row */}
					<div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16 mb-14 pb-14 border-b border-white/20">
						{/* Logo Lockup */}
						<div className="flex items-center gap-4 shrink-0">
							<WLogoIcon />
							<WeaaveLogo />
							<div className="h-8 w-px bg-white/40 mx-2" />
							<span className="text-[10px] font-semibold tracking-[0.2em] leading-tight uppercase text-white/90">
								ARTISTIC
								<br />
								INTELLIGENCE
							</span>
						</div>

						{/* Description */}
						<p className="text-sm leading-relaxed max-w-md text-white/80">
							Weaave is a new way to create. We&apos;re bridging the gap between AI capabilities and human creativity, to continue the tradition of
							craft in artistic expression. We call it Artistic Intelligence.
						</p>
					</div>

					{/* Links Grid */}
					<div className="flex flex-col gap-6 mb-16">
						{/* Social Icons (Moved here as main focus since links are removed) */}
						<div className="flex gap-5 items-start justify-start">
							{socialLinks.map((social, i) => (
								<a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
									<social.icon size={16} strokeWidth={2} />
								</a>
							))}
						</div>
					</div>

					{/* Horizontal line before SOC section */}
					<div className="w-40 h-px bg-white/30 mb-10" />

					{/* SOC Badge & Copyright */}
					<div className="flex flex-col gap-4">
						{/* SOC Badge */}
						<div className="flex items-center gap-3">
							<div className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center shrink-0">
								<span className="text-[8px] font-bold text-white leading-none">
									AICPA
									<br />
									SOC
								</span>
							</div>
							<div className="text-xs leading-tight">
								<p className="font-semibold text-[#111]">SOC 2 Type II Certified</p>
								<p className="text-[#111]/60 text-[11px]">Your data is protected with industry-standard security controls.</p>
							</div>
						</div>

						{/* Footer Credits */}
						<div className="flex items-center gap-2 mt-4 text-[12px] font-medium tracking-[0.05em] text-[#111]/70">
							<a
								href="mailto:akshithdh@gmail.com"
								className="flex items-center gap-1 hover:text-[#111] transition-colors border-b border-black/20 hover:border-black/50"
							>
								<span>Get in touch</span>
							</a>
						</div>
					</div>
				</div>

				{/* Decorative curve */}
				<div className="absolute bottom-24 right-0 w-48 h-48 md:w-72 md:h-72 pointer-events-none hidden lg:block">
					<svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
						<path d="M200 0 C200 110, 110 200, 0 200" stroke="white" strokeWidth="1" fill="none" opacity="0.4" />
					</svg>
				</div>

				{/* Start Now Button */}
				<div className="absolute bottom-0 right-0 z-20">
					<button className="bg-accent text-accent-foreground text-3xl md:text-5xl lg:text-6xl font-normal px-10 md:px-16 py-6 md:py-8 rounded-tl-[40px] md:rounded-tl-[60px] hover:brightness-110 transition-all leading-none">
						Start Now
					</button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
