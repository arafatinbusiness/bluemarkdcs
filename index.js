// Blog loading state management
let isBlogLoading = false;
let cachedBlogPosts = null;
let lastBlogCacheTime = 0;
const BLOG_CACHE_DURATION = 5 * 60 * 1000; // 5 minutes cache
let blogLoadRetryCount = 0;
const MAX_BLOG_RETRIES = 3;

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyChg5hLux3sb6wWnI-gTawGmN7nNBluOuA",
    authDomain: "bluemarksdocuments.firebaseapp.com",
    projectId: "bluemarksdocuments",
    storageBucket: "bluemarksdocuments.firebasestorage.app",
    messagingSenderId: "270747098179",
    appId: "1:270747098179:web:da206e8bd59b004f1648f6",
    measurementId: "G-E05L9L652B"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Company Contact Information
const COMPANY_INFO = {
    phone: "+971566229773",
    whatsapp: "+971566229773",
    location: "25.2600,55.3029", // Al Rigga, Deira, Dubai coordinates
    address: "Office: 304 Al Hawai Building, Al Rigga Road, Deira, Dubai, UAE"
};

// Service Overview Details
const serviceOverviewDetails = {
    'emirates-id': {
        title: '🆔 DED Services (Department of Economic Development)',
        description: `<p>Starting a business in Dubai is one of the most exciting opportunities for entrepreneurs, but it also comes with a complex set of requirements. The Department of Economic Development (DED) is the authority responsible for issuing and renewing business licenses in the emirate. Without a valid license, no company can legally operate in the Dubai Mainland. This makes DED services one of the most critical steps in establishing a business presence.</p>

<br>

<p>The process begins with choosing the right type of license — commercial, professional, or industrial — depending on the nature of the business. Entrepreneurs must also secure trade name approval, prepare a Memorandum of Association if required, and submit a range of documents including passport copies, tenancy contracts, and approvals from other authorities depending on the activity. For many first‑time business owners, this can be overwhelming. Missing a single document or misunderstanding the requirements often leads to delays, rejected applications, or even penalties.</p>

<br>

<p>This is where third‑party agencies step in to make life easier. Instead of spending days navigating government offices, clients can rely on experienced professionals who know the system inside out. Agencies prepare the paperwork correctly, liaise directly with DED officials, and ensure compliance with all regulations. They also advise on the most suitable license type, saving entrepreneurs from costly mistakes. For renewals and amendments, agencies handle the process smoothly, ensuring that businesses remain compliant and avoid interruptions in operations.</p>

<br>

<p>The challenge for most entrepreneurs is not just the paperwork, but also the time and effort required to understand the rules. Dubai's business environment is dynamic, and regulations can change. Agencies stay updated on these changes and guide clients accordingly. By outsourcing DED services to a trusted agency, business owners can focus on growth and strategy while the administrative side is handled professionally. In short, agencies transform what could be a stressful process into a seamless experience, helping entrepreneurs launch their ventures with confidence.</p>`
    },
    'visa-renewal': {
        title: '🔄 Tasheel / MOHRE Services',
        description: `<p>Tasheel centers and MOHRE (Ministry of Human Resources and Emiratisation) services are essential for employment-related transactions in the UAE. These government service centers handle labor contracts, work permits, and various employment documentation processes that are crucial for both employers and employees.</p>

<br>

<p>The Tasheel system was established to streamline government services and make them more accessible to the public. These centers handle a wide range of services including labor card applications, contract modifications, employment visa processing, and other employment-related transactions. MOHRE, on the other hand, focuses on labor market regulation, employment policies, and ensuring compliance with UAE labor laws.</p>

<br>

<p>For businesses, navigating these services can be time-consuming and complex. Each transaction requires specific documentation, proper formatting of contracts, and adherence to strict timelines. Missing deadlines or submitting incomplete documents can result in penalties or delays that affect business operations and employee status.</p>

<br>

<p>Professional agencies specializing in Tasheel and MOHRE services help businesses navigate these requirements efficiently. They ensure that all documents are prepared correctly, submissions are made on time, and any issues are resolved promptly. This allows businesses to focus on their core operations while ensuring compliance with UAE labor regulations.</p>`
    },
    'new-emirates': {
        title: '🆔 Amer / Immigration Services',
        description: `<p>Amer centers are the primary service points for immigration and residency services in the UAE, operated by the General Directorate of Residency and Foreigners Affairs (GDRFA). These centers handle a comprehensive range of immigration services including residence visa applications, entry permits, visa renewals, and status change services.</p>

<br>

<p>The Amer system was designed to provide efficient and streamlined immigration services to residents and visitors. These centers handle everything from initial entry permits for family members to complex residency applications for investors and professionals. The services include visa stamping, medical fitness tests coordination, Emirates ID applications, and various other immigration-related processes.</p>

<br>

<p>Navigating the UAE immigration system can be challenging due to frequent policy updates, complex documentation requirements, and strict timelines. Missing deadlines or submitting incorrect documents can lead to fines, visa rejections, or even bans from entering the UAE.</p>

<br>

<p>Professional agencies with expertise in Amer services help clients navigate these complexities efficiently. They stay updated with the latest immigration policies, ensure all documents are properly prepared, and handle submissions through the correct channels. This saves clients time, reduces stress, and ensures compliance with UAE immigration laws.</p>`
    },
    'status-change': {
        title: '📝 Tourist Visa Services',
        description: `<p>Tourist visa services are essential for visitors planning to explore the United Arab Emirates. The UAE offers various types of tourist visas including 30-day and 90-day options, each with specific requirements and processing times.</p>

<br>

<p>Tourist visas can be obtained through airlines, hotels, or specialized visa agencies. The process typically requires passport copies, photographs, completed application forms, and sometimes proof of accommodation or return tickets. For certain nationalities, additional documentation may be required.</p>

<br>

<p>The challenge with tourist visas lies in the varying requirements based on nationality, the need for accurate documentation, and strict processing timelines. Delays or errors in applications can result in travel disruptions and additional costs.</p>

<br>

<p>Professional visa agencies streamline this process by handling all documentation requirements, ensuring applications are submitted correctly, and providing updates on processing status. They also offer expedited services for urgent travel needs and provide guidance on visa extensions when required.</p>`
    },
    'visa-stamping': {
        title: '🏷️ UAE Visa Services',
        description: `<p>UAE visa services encompass a wide range of immigration processes including residence visas, employment visas, family sponsorship visas, and various other types of permits required for living and working in the UAE.</p>

<br>

<p>The UAE visa system is comprehensive and includes multiple stages: entry permits, medical fitness tests, Emirates ID registration, and final visa stamping. Each stage has specific requirements and timelines that must be followed precisely.</p>

<br>

<p>Common challenges include understanding the different visa categories, preparing the correct documentation, meeting medical requirements, and adhering to strict processing timelines. Changes in sponsorship, employment status, or personal circumstances can also complicate the visa process.</p>

<br>

<p>Professional visa service providers offer comprehensive support throughout the entire visa process. They help clients understand the requirements, prepare all necessary documents, coordinate medical tests, and ensure timely submissions. This comprehensive approach ensures that clients can focus on their personal or professional commitments while their visa matters are handled professionally.</p>`
    },
    'establishment-card': {
        title: '🏢 Ejari Services',
        description: `<p>Ejari services are essential for registering rental contracts in Dubai. The Ejari system, managed by the Dubai Land Department, provides official registration of tenancy contracts, which is mandatory for various government transactions including utility connections, residency visa processing, and business license applications.</p>

<br>

<p>The Ejari registration process requires specific documentation including the tenancy contract, landlord and tenant identification, title deed copy, and sometimes additional documents depending on the property type. The system ensures transparency in rental agreements and protects the rights of both landlords and tenants.</p>

<br>

<p>Common challenges include incomplete documentation, discrepancies in contract details, delays in landlord cooperation, and understanding the specific requirements for different types of properties.</p>

<br>

<p>Professional agencies specializing in Ejari services help streamline this process by verifying all documentation requirements, coordinating with landlords when necessary, and ensuring timely registration. They also assist with Ejari renewals and provide guidance on rental dispute resolution when needed.</p>`
    },
    'work-permit': {
        title: '💼 Attestation Services',
        description: `<p>Attestation services are crucial for validating educational, personal, and commercial documents for use in the UAE. The attestation process involves multiple stages including notarization, authentication by home country authorities, and final attestation by UAE embassies and the Ministry of Foreign Affairs.</p>

<br>

<p>The attestation process varies depending on the type of document and the country of origin. Educational certificates, marriage certificates, birth certificates, and commercial documents each have specific attestation requirements and procedures.</p>

<br>

<p>Common challenges include understanding the multi-stage process, coordinating with multiple authorities, dealing with document translation requirements, and meeting strict timelines for employment or business purposes.</p>

<br>

<p>Professional attestation service providers offer comprehensive support by handling the entire attestation process from start to finish. They ensure documents are properly prepared, coordinate with all relevant authorities, and provide updates on processing status. This saves clients significant time and ensures their documents are properly attested for official use in the UAE.</p>`
    },
    'amer-services': {
        title: '🏛️ Other Services',
        description: `<p>BlueMark Documents Clearing Services offers a comprehensive range of additional government and administrative services to meet various client needs. These services include document clearing, government transaction processing, and specialized administrative support.</p>

<br>

<p>Our other services encompass a wide range of administrative tasks including document preparation, government liaison services, translation services, and specialized administrative support for businesses and individuals. We handle everything from simple document submissions to complex multi-department transactions.</p>

<br>

<p>The advantage of using professional document clearing services lies in our expertise in navigating government systems, understanding regulatory requirements, and maintaining relationships with various government departments. We stay updated with changing regulations and procedures to ensure efficient service delivery.</p>

<br>

<p>Our team of experienced professionals handles each service with precision and attention to detail, ensuring that our clients' administrative needs are met efficiently and professionally. Whether it's a simple document submission or a complex multi-stage process, we provide reliable and professional service to save our clients time and ensure compliance with all requirements.</p>`
    }
};

// Navigation Functions
function goToHome() {
    // Hide all sections except home sections
    document.querySelector('.hero').style.display = 'block';
    document.querySelector('.most-used-services').style.display = 'block';
    document.querySelector('.services-section').style.display = 'none';
    document.querySelector('.banner-section').style.display = 'block';
    document.querySelector('.partners').style.display = 'block';
    document.querySelector('.contact-form').style.display = 'block';
    
    // Hide blog section if it's visible
    const blogSection = document.querySelector('.blog-section');
    if (blogSection) {
        blogSection.style.display = 'none';
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Close side menu if open
    const sideMenu = document.getElementById('sideMenu');
    if (sideMenu) {
        sideMenu.classList.remove('active');
    }
    
    // Close modal if open
    const modal = document.getElementById('serviceModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Handle browser back button
window.addEventListener('popstate', function(event) {
    goToHome();
});

// Side Menu Functions
function toggleSideMenu() {
    const sideMenu = document.getElementById('sideMenu');
    sideMenu.classList.toggle('active');
}

function makeCall() {
    window.open(`tel:${COMPANY_INFO.phone}`);
    toggleSideMenu();
}

function openLocation() {
    const [lat, lng] = COMPANY_INFO.location.split(',');
    window.open(`https://www.google.com/maps?q=${lat},${lng}`);
    toggleSideMenu();
}

function openWhatsApp() {
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}`);
    toggleSideMenu();
}

function showServices() {
    // Show detailed services section
    showDetailedServices();
    toggleSideMenu();
}

function showMedicalTest() {
    openServiceForm('medical-test');
    toggleSideMenu();
}

function showAbout() {
    // Scroll to about section
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
    toggleSideMenu();
}

function openAdminLogin() {
    // Navigate to admin login page
    window.location.href = 'admin.html';
    toggleSideMenu();
}

// Services Dropdown Functions
let servicesDropdownTimeout;

function showServicesDropdown() {
    clearTimeout(servicesDropdownTimeout);
    const dropdown = document.getElementById('servicesDropdown');
    dropdown.classList.add('show');
}

function hideServicesDropdown() {
    servicesDropdownTimeout = setTimeout(() => {
        const dropdown = document.getElementById('servicesDropdown');
        dropdown.classList.remove('show');
    }, 300);
}

// Show/Hide Detailed Services Functions
function showDetailedServices() {
    document.querySelector('.most-used-services').style.display = 'none';
    document.querySelector('.services-section').style.display = 'block';
    document.querySelector('.services-section').scrollIntoView({ behavior: 'smooth' });
}

function hideDetailedServices() {
    document.querySelector('.services-section').style.display = 'none';
    document.querySelector('.most-used-services').style.display = 'block';
    document.querySelector('.most-used-services').scrollIntoView({ behavior: 'smooth' });
}

// Service Categories Functions
function showServiceCategory(categoryId) {
    // Hide all service categories
    const categories = document.querySelectorAll('.service-category');
    categories.forEach(category => category.classList.remove('active'));
    
    // Show selected category
    const selectedCategory = document.getElementById(categoryId);
    if (selectedCategory) {
        selectedCategory.classList.add('active');
    }
    
    // Update category buttons
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// Service Details Display Function
function showServiceDetails(serviceCode) {
    const modal = document.getElementById('serviceModal');
    const modalContent = document.getElementById('modalContent');
    
    if (!modal || !modalContent) {
        console.error('Modal elements not found');
        return;
    }
    
    // Get service details
    const service = serviceOverviewDetails[serviceCode];
    if (!service) {
        console.error('Service details not found for:', serviceCode);
        return;
    }
    
    // Create service details HTML
    modalContent.innerHTML = `
        <h3>${service.title}</h3>
        <div class="service-details-content">
            <div class="service-description">
                <p>${service.description}</p>
            </div>
            <div class="service-actions" style="margin-top: 2rem; text-align: center;">
                <button class="btn btn-primary" onclick="openServiceForm('${serviceCode}')">Apply for this Service</button>
                <button class="btn btn-secondary" onclick="closeServiceModal()" style="margin-left: 1rem;">Close</button>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Service Modal Functions
function openServiceForm(serviceCode) {
    const modal = document.getElementById('serviceModal');
    const modalContent = document.getElementById('modalContent');
    
    if (!modal || !modalContent) {
        console.error('Modal elements not found');
        return;
    }
    
    // Get service details
    const service = serviceOverviewDetails[serviceCode] || { title: 'Service Application' };
    
    // Create service form HTML
    modalContent.innerHTML = `
        <h3>${service.title} - Application Form</h3>
        <form id="serviceForm" onsubmit="submitServiceForm(event)">
            <input type="hidden" name="serviceCode" value="${serviceCode}">
            
            <div class="form-group">
                <label for="fullName">Full Name *</label>
                <input type="text" id="fullName" name="fullName" required>
            </div>
            
            <div class="form-group">
                <label for="applicantEmail">Email Address *</label>
                <input type="email" id="applicantEmail" name="applicantEmail" required>
            </div>
            
            <div class="form-group">
                <label for="whatsappNumber">WhatsApp Number *</label>
                <input type="tel" id="whatsAppNumber" name="whatsAppNumber" required>
            </div>
            
            <div class="form-group">
                <label for="serviceType">Service Type</label>
                <input type="text" id="serviceType" name="serviceType" value="${service.title}" readonly>
            </div>
            
            <div class="form-group">
                <label for="additionalInfo">Additional Information</label>
                <textarea id="additionalInfo" name="additionalInfo" placeholder="Please provide any additional details about your requirements..."></textarea>
            </div>
            
            <div class="form-actions">
                <button type="button" class="btn btn-secondary" onclick="closeServiceModal()">Cancel</button>
                <button type="submit" class="btn btn-primary">Submit Application</button>
            </div>
        </form>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Reset form if it exists
    const form = document.getElementById('serviceForm');
    if (form) {
        form.reset();
    }
}

function openEasyApply() {
    // Open a general application form
    openServiceForm('general');
}

// Form Submission Functions
async function submitServiceForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const serviceCodeInput = form.querySelector('input[name="serviceCode"]');
    const serviceCode = serviceCodeInput ? serviceCodeInput.value : 'unknown';
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.innerHTML = '<span class="loading"></span> Submitting...';
    submitBtn.disabled = true;
    
    try {
        // Get service details
        const service = serviceOverviewDetails[serviceCode] || { title: 'Service Application' };
        
        // Collect form data
        const formData = {
            serviceCode: serviceCode,
            serviceName: service.title,
            fullName: document.getElementById('fullName').value,
            applicantEmail: document.getElementById('applicantEmail').value,
            whatsAppNumber: document.getElementById('whatsAppNumber').value,
            serviceType: document.getElementById('serviceType').value,
            additionalInfo: document.getElementById('additionalInfo').value,
            submittedAt: firebase.firestore.FieldValue.serverTimestamp(),
            status: 'pending'
        };
        
        // Save to Firestore
        await db.collection('serviceApplications').add(formData);
        
        // Show success message
        showMessage('Application submitted successfully! We will contact you soon.', 'success');
        
        // Close modal and reset form
        closeServiceModal();
        
    } catch (error) {
        console.error('Error submitting application:', error);
        showMessage('Error submitting application. Please try again.', 'error');
    } finally {
        // Reset button state
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

// Utility Functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showMessage(message, type) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.success-message, .error-message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `${type}-message`;
    messageDiv.textContent = message;
    
    // Insert at top of body
    document.body.insertBefore(messageDiv, document.body.firstChild);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation clicks
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('serviceModal');
        if (event.target === modal) {
            closeServiceModal();
        }
    });
    
    // Close side menu when clicking outside
    document.addEventListener('click', function(event) {
        const sideMenu = document.getElementById('sideMenu');
        const menuDots = document.querySelector('.menu-dots');
        
        if (!sideMenu.contains(event.target) && !menuDots.contains(event.target)) {
            sideMenu.classList.remove('active');
        }
    });
    
    // Add active class to current nav item on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// Performance optimization: Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Blog Section Functions
function showBlogSection() {
    // Prevent multiple simultaneous calls
    if (isBlogLoading) {
        return;
    }
    
    try {
        isBlogLoading = true;
        blogLoadRetryCount = 0; // Reset retry count when opening blog section
        
        // Hide other sections
        const hero = document.querySelector('.hero');
        const services = document.querySelector('.most-used-services');
        const detailedServices = document.querySelector('.services-section');
        const partners = document.querySelector('.partners');
        const contact = document.querySelector('.contact-form');
        const banner = document.querySelector('.banner-section');
        
        if (hero) hero.style.display = 'none';
        if (services) services.style.display = 'none';
        if (detailedServices) detailedServices.style.display = 'none';
        if (partners) partners.style.display = 'none';
        if (contact) contact.style.display = 'none';
        if (banner) banner.style.display = 'none';
        
        // Show blog section
        const blogSection = document.querySelector('.blog-section');
        if (blogSection) {
            blogSection.style.display = 'block';
            blogSection.scrollIntoView({ behavior: 'smooth' });
            
            // Load blog posts with caching
            loadBlogPosts();
        } else {
            isBlogLoading = false;
        }
    } catch (error) {
        console.error('Error in showBlogSection:', error);
        isBlogLoading = false;
    }
}

function hideBlogSection() {
    // Show other sections
    document.querySelector('.hero').style.display = 'block';
    document.querySelector('.most-used-services').style.display = 'block';
    document.querySelector('.services-section').style.display = 'none'; // Keep detailed services hidden
    document.querySelector('.partners').style.display = 'block';
    document.querySelector('.contact-form').style.display = 'block';
    
    // Hide blog section
    document.querySelector('.blog-section').style.display = 'none';
    document.querySelector('.hero').scrollIntoView({ behavior: 'smooth' });
}

// Blog pagination variables
let currentBlogPage = 1;
let lastBlogDoc = null;
const BLOG_POSTS_PER_PAGE = 6;

// Load Blog Posts for Main Website
function loadBlogPosts() {
    const blogPosts = document.getElementById('blogPosts');
    if (!blogPosts) {
        isBlogLoading = false;
        return;
    }
    
    // Check cache first
    const now = Date.now();
    if (cachedBlogPosts && (now - lastBlogCacheTime) < BLOG_CACHE_DURATION) {
        blogPosts.innerHTML = cachedBlogPosts;
        document.getElementById('loadMoreBtn').style.display = 'inline-block';
        isBlogLoading = false;
        return;
    }
    
    blogPosts.innerHTML = '<div class="loading-animation">Loading blog posts...</div>';
    
    // Reset pagination
    currentBlogPage = 1;
    lastBlogDoc = null;
    
    // Add timeout to prevent infinite loading
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Blog loading timeout. Please check your internet connection and try again.')), 10000);
    });
    
    const blogPromise = db.collection('posts')
        .orderBy('createdAt', 'desc')
        .limit(BLOG_POSTS_PER_PAGE)
        .get();
    
    Promise.race([blogPromise, timeoutPromise])
        .then(snapshot => {
            if (snapshot.empty) {
                blogPosts.innerHTML = `
                    <div class="no-data" style="text-align: center; padding: 3rem; color: #666;">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">📝</div>
                        <h3 style="color: #059669; margin-bottom: 1rem;">No Blog Posts Yet</h3>
                        <p>Our team is working on creating amazing content for you. Check back soon!</p>
                        <button class="btn btn-primary" onclick="loadBlogPosts()" style="margin-top: 1rem;">Try Again</button>
                    </div>
                `;
                isBlogLoading = false;
                return;
            }

            // Store last document for pagination
            lastBlogDoc = snapshot.docs[snapshot.docs.length - 1];
            
            let html = '';
            snapshot.forEach(doc => {
                const post = doc.data();
                const postId = doc.id;
                const createdDate = post.createdAt ? post.createdAt.toDate().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }) : 'Unknown Date';
                
                // Create excerpt from content
                const excerpt = extractExcerpt(post.content, 30);
                
                html += `
                    <article class="blog-post" onclick="openBlogPost('${postId}')">
                        <h4>${post.title}</h4>
                        <div class="blog-meta">
                            <span class="blog-author">📝 ${post.author}</span>
                            <span class="blog-date">📅 ${createdDate}</span>
                        </div>
                        <div class="blog-content">
                            <p>${excerpt}</p>
                            <button class="btn btn-primary" style="margin-top: 1rem;">Read Full Article →</button>
                        </div>
                    </article>
                `;
            });
            
            blogPosts.innerHTML = html;
            
            // Cache the HTML for faster loading next time
            cachedBlogPosts = html;
            lastBlogCacheTime = now;
            
            // Show/hide load more button
            if (snapshot.docs.length === BLOG_POSTS_PER_PAGE) {
                document.getElementById('loadMoreBtn').style.display = 'inline-block';
            } else {
                document.getElementById('loadMoreBtn').style.display = 'none';
            }
            
            // Reset loading flag
            isBlogLoading = false;
            
        }).catch(error => {
            console.error('Error loading blog posts:', error);
            
            let errorMessage = error.message || 'Something went wrong. Please try again later.';
            
            blogPosts.innerHTML = `
                <div class="error-state" style="text-align: center; padding: 3rem; color: #dc2626;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">⚠️</div>
                    <h3>Error Loading Blog Posts</h3>
                    <p>${errorMessage}</p>
                    <button class="btn btn-primary" onclick="loadBlogPosts()" style="margin-top: 1rem;">Try Again</button>
                </div>
            `;
            isBlogLoading = false;
        });
}

// Extract excerpt from HTML content
function extractExcerpt(content, wordLimit = 30) {
    // Strip HTML tags
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content || '';
    const textContent = tempDiv.textContent || tempDiv.innerText || '';
    
    // Split into words and limit
    const words = textContent.trim().split(/\s+/);
    if (words.length <= wordLimit) {
        return textContent;
    }
    
    return words.slice(0, wordLimit).join(' ') + '...';
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    lazyLoadImages();
});
