import React from "react";
import { Link } from "@yext/pages/components";
import logo from "src/assets/images/logo.svg";
import "src/components/common/Header.css";
import { useBreakpoint } from "src/common/useBreakpoints";
import { BiSearch, BiSearchAlt2 } from "react-icons/bi";
import { useTemplateData } from "src/common/useTemplateData";
import { HOME_PATH } from "src/common/consts";

export default function Header() {
	const isDesktop = useBreakpoint("sm");
	const templateData = useTemplateData();

	return (
		<header className="Header border-b border-solid border-brand-gray-400">
			<div className="container py-5 flex justify-between items-center">
				<div className="flex items-stretch">
					<Link className="flex items-center" href="https://telescope.yext.com">
						<img className="Header-logo mr-1" src={logo} alt="" />
						<div className="flex items-stretch">
							<div className="Heading Heading--head">
								Telescope
							</div>
						</div>
					</Link>
					<div className="w-[2px] bg-black ml-2 mr-2"></div>
					<Link className="flex items-center" href="https://knowledge.telescope.yext.com">
						<div className="Heading Heading--kb flex flex-col lg:flex-row self-center">
							<span className="mr-2">
								Knowledge
							</span>
							<span>
								Base
							</span>
						</div>
					</Link>
				</div>

				{!isDesktop && <Link href="https://telescope.yext.com/search">
					<BiSearchAlt2 size={24} />
				</Link>}

				{isDesktop && <div className="flex gap-4">
					<Link target="_blank" className="Link Link--inverse Link--header font-light" href="https://initiatives.telescope.yext.com">Initiatives</Link>
					<Link target="_blank" className="Link Link--inverse Link--header font-light" href="https://hitchhikers.yext.com/community/">Hitchhikers</Link>
					<Link target="_blank" className="Link Link--inverse Link--header font-light" href="https://forms.gle/Hvb1Rbi6P2PaSR437">Feedback</Link>
					<Link target="_blank" className="Link Link--inverse Link--header font-light" href="slack://channel?team=TUNK1C0C8&id=C02MY9K3SL9">Help</Link>
				</div>}
			</div>
		</header>
	)
}