import React from "react";
import HeadingTitle from "../../_component/ui/HeadingTitle";

const PrivacyPolicy = () => {
    return (
        <div className="container mx-auto px-20 py-8 my-10">
            <HeadingTitle as="h2" className="mb-10 text-center">
                Privacy Policy
            </HeadingTitle>

            <div className="text-lg text-[#CDCDCD]">
                <ol className="list-decimal pl-8 space-y-6">
                    <li>
                        <h2 className="font-semibold text-xl mb-2">Introduction</h2>
                        <p>
                            At Vancouver WebTeck, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our website or services. By using our site, you agree to the terms outlined in this policy.
                        </p>
                    </li>

                    <li>
                        <h2 className="font-semibold text-xl mb-2">Information We Collect</h2>
                        <p>We collect various types of information to provide and improve our services:</p>
                        <ul className="list-disc pl-8 space-y-2">
                            <li>
                                <strong>Personal Information:</strong> When you contact us, fill out a form, or sign up for our services, we may collect details such as your name, email address, phone number, and company information.
                            </li>
                            <li>
                                <strong>Usage Data:</strong> We may automatically collect information about how you interact with our website, including IP addresses, browser type, pages visited, and time spent on each page.
                            </li>
                            <li>
                                <strong>Cookies and Tracking Technologies:</strong> Our website uses cookies and similar technologies to enhance your experience, analyze site performance, and customize content. You can control cookie preferences through your browser settings.
                            </li>
                        </ul>
                    </li>

                    <li>
                        <h2 className="font-semibold text-xl mb-2">How We Use Your Information</h2>
                        <p>We use the collected data to:</p>
                        <ul className="list-disc pl-8 space-y-2">
                            <li>Provide and maintain our services</li>
                            <li>Respond to inquiries or requests</li>
                            <li>Improve our website and services</li>
                            <li>Send promotional materials or updates, only with your consent</li>
                            <li>Analyze website traffic and usage patterns</li>
                        </ul>
                    </li>

                    <li>
                        <h2 className="font-semibold text-xl mb-2">Data Sharing and Disclosure</h2>
                        <p>We do not sell or rent your personal information. We may share your information with:</p>
                        <ul className="list-disc pl-8 space-y-2">
                            <li>
                                <strong>Service Providers:</strong> Third-party vendors who assist us in operating our website or conducting our business, as long as they agree to keep your data confidential.
                            </li>
                            <li>
                                <strong>Legal Requirements:</strong> We may disclose your data if required by law, to protect our rights, or to respond to a lawful request by public authorities.
                            </li>
                        </ul>
                    </li>

                    <li>
                        <h2 className="font-semibold text-xl mb-2">Data Security</h2>
                        <p>
                            We implement industry-standard security measures to protect your personal information. However, please note that no method of electronic storage or transmission is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </li>

                    <li>
                        <h2 className="font-semibold text-xl mb-2">Your Rights and Choices</h2>
                        <p>
                            Depending on your location, you may have the following rights regarding your personal data:
                        </p>
                        <ul className="list-disc pl-8 space-y-2">
                            <li>Access, correct, or delete your personal information</li>
                            <li>Opt out of marketing communications</li>
                            <li>Restrict or object to data processing</li>
                            <li>Request data portability</li>
                        </ul>
                        <p>
                            If you would like to exercise any of these rights, please contact us at vancouver.webteck@gmail.com.
                        </p>
                    </li>

                    <li>
                        <h2 className="font-semibold text-xl mb-2">Third-Party Links</h2>
                        <p>
                            Our website may contain links to other sites. We are not responsible for the content or privacy practices of those websites. We recommend reviewing the privacy policies of any third-party sites you visit.
                        </p>
                    </li>

                    <li>
                        <h2 className="font-semibold text-xl mb-2">Changes to This Privacy Policy</h2>
                        <p>
                            We may update our Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review this policy periodically to stay informed.
                        </p>
                    </li>

                    <li>
                        <h2 className="font-semibold text-xl mb-2">Contact Us</h2>
                        <p>
                            If you have questions or concerns about our Privacy Policy or how we handle your data, please contact us at:
                        </p>
                        <p className="font-semibold">
                            Email: <a href="mailto:vancouver.webteck@gmail.com" className="text-blue-600 underline">vancouver.webteck@gmail.com</a>
                        </p>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
