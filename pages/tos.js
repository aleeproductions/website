/*
    Alee Productions Website: Website for Alee Productions
    Copyright (C) 2019 Alee

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

*/
import Layout from "../components/Layout";

const TOS = () => (
	<Layout>
		<div>
			<div className="container">
				{/* TODO: Add legal stuff */}
				<div id="top"/>
				<h1 className="text-center display-5 mt-3">Alee Productions Terms of Service</h1>
				<p className="text-center lead">These terms and service have been set in place so we make sure that you can have a great time using our services.</p>
				<div className="container">
					<div id="tiers">
						<h1>Tiers</h1>
						<ul className="none">
							<li><a className="white-text" href="#normal-tier">Normal Tier</a> - It means it is not too
								severe and it there’s nothing to worry about.
							</li>
							<li><a className="white-text" href="#excessive-tier">Excessive Tier</a> - It means that if a
								rule is broken that’s severe it will be taken action immediately and will be stored in
								the punishment log.
							</li>
						</ul>
					</div>
					<div id="normal-tier">
						<h1>Normal Tier</h1>
						<p>If these are broken, then an unofficial warning will occur. If these actions continue, an
							official warning will occur then excessive punishment will happen if continued once
							more.</p>
						<ul>
							<li>Use common sense. (This isn’t an against rule but you must use your common knowledge.)
							</li>
							<li>No spamming (Any spam will result in an official warning.)</li>
							<li>No any advertisements/giveaways at any channels. Unless for a specific purpose.</li>
							<li>Respect others.</li>
							<li>No backseat moderating (enforcing the rules to other users)</li>
							<li>Refrain asking for staff that just lowers your chance to never getting it.</li>
						</ul>
					</div>
					<div id="excessive-tier">
						<h1>Excessive Tier</h1>
						<p>This can result in an official warning or a termination from using our services.</p>
						<ul>
							<li>No excessive swearing (Swearing is allowed but cursing that contains racial slur and etc
								will result in immediate severe punishment.)
							</li>
							<li>Any accusations will never be tolerated here there will be an investigation from the
								staff team if it occurs and false accusation may lead a temporary termination or
								possibly permanently terminated from using our services.
							</li>
							<li>Do not argue or threaten the staff.</li>
							<li>Blackmailing members is also not tolerated here.</li>
							<li>No NSFW content.</li>
							<li>No raids to be started when using our services.</li>
							<li>No alts are to be on any of our services.</li>
							<li>Threatening anyone will also not be tolerated. (i.e. DDoS, trying to find you and etc)
							</li>
							<li>Any malicious content will not be tolerated. (i.e. Viruses, Malware, Adware and etc)
							</li>
						</ul>
					</div>
					<div id="policy">
						<h1>Alee Productions Policies</h1>
						<div id="coppa-policy">
							<h1>COPPA Policy</h1>
							<p>You must be at least 13 years old to be in this server due to the <a
								className="green-text"
								href="https://en.wikipedia.org/wiki/Children's_Online_Privacy_Protection_Act">COPPA</a> regulations…
							</p>
							<p>If you don’t accept this, you have to leave our services.</p>
							<p>An investigation or/and ban may happen if found guilty.</p>
						</div>
						<h2>Discord Only Policies</h2>
						<div id="discord-nickname">
							<h1>Nickname Policy</h1>
							<p>We enforce this nickname policy to keep a clean, friendly community.</p>
							<p>Our nickname system is different, using the command <code className="green-text">am:nick
								[your nickname]</code> so our staff team can approve it first. This system is set in
								place so that the community is a nice place to be for everyone.
								To have your nickname accepted, it must comply with the following:</p>
							<ul>
								<li>No offensive words</li>
								<li>No symbols</li>
								<li>Not attention-grabbing (i.e. getting to the top of the list by using a symbol)</li>
							</ul>
							<p>Any display name that does not follow the guidelines above will have the following done
								to it:</p>
							<ul>
								<li>Censoring your nickname/username</li>
								<li>Ignoring the nickname change from AstralMod</li>
							</ul>
						</div>
						<div id="logging-policy">
							<h1>Logging Policy</h1>
							<p>Our bots log the following things, and store them in their databases:</p>
							<ul>
								<li>Deleted Messages</li>
								<li>Edited Messages</li>
								<li>Your ID</li>
								<li>You joining and leaving</li>
							</ul>
							<p>If you don’t agree with the policies and wanting to opt out, you may not use our
								services.</p>
						</div>
					</div>
					<p>We also highly recommend you to read Discord’s <a className="text-green"
																		 href="https://discordapp.com/terms">ToS</a> and <a
						className="text-green" href="https://discordapp.com/guidelines">Community Guidelines</a>.</p>
					<div id="modal">
						{/*  Modal  */}
						<div className="modal fade down" id="instructionsModal" tabIndex="-1" role="dialog"
							 aria-labelledby="instructions-label" aria-hidden="true">
							<div className="modal-dialog" role="document">
								<div className="modal-content dark">
									<div className="modal-header">
										<h5 className="modal-title" id="instructions-label">Instructions</h5>
										<button type="button" className="close" data-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div className="modal-body">
										<ul className="none">
											<li>1. Never ask for staff</li>
											<li>2. Be active in the Alee Productions</li>
											<li>3. Follow all rules without breaking them</li>
											<li>4. Finally, the staff will pick people that they trust</li>
											<li>5. The staff has to vote if they can be accepted to be part of the staff
												team
											</li>
										</ul>
									</div>
									<div className="modal-footer">
										<button type="button" className="btn green" data-dismiss="modal">Close</button>
									</div>
								</div>
							</div>
						</div>
						{/*  Modal  */}
					</div>
					<div id="FAQ">
						<h1>Frequent Asked Questions</h1>
						<p>These are the frequently asked questions that you might ask the staffs.</p>
						<ul className="none">
							<li>Q: Can I be staff?</li>
							<li>A: No, you can't ask for staff but you want to know how to get it, then here are the <a
								className="green-text" id="modalActivate" data-toggle="modal"
								data-target="#instructionsModal">instructions</a>.
							</li>
							<li>Q: I was banned for no reason! I hate the staff…</li>
							<li>A: Well… if you were banned for no reason you can ask our staff team and they will tell
								you why you were banned.
							</li>
						</ul>
					</div>
					<div id="conclusion">
						<p>If a rule is broken, no need to panic, it's just a heads up on what’s coming if you were to
							break another rule and if you got mistakenly warned please contact one of the staff
							immediately.</p>
						<p>If there's staff abusing their powers please report them to Alee immediately.</p>
						<p>Thanks for reading the ToS!</p>
						<p>- Alee Productions Community Team</p>
						<p>Last updated on November 26th 2019</p>
					</div>
					<a href="#top" className="green-text">Back to top</a>
				</div>
			</div>
		</div>
	</Layout>
);

export default TOS;