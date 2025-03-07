// 示例产品数据
const products = [
    {
        barcode: "40610",
        name: "BREADED CRAB CLAW 香脆蟹钳",
        packaging: "300g x 20T",
        skus: [
            { type: "CTN", name: "BREADED CRAB CLAW 香脆蟹钳", packaging: "300g x 20T", itemCode: "40610" }
        ],
        scanned: false
    },
    {
        barcode: "40600",
        name: "IMITATION CRAB CLAW 人造蟹钳",
        packaging: "250g x 30t",
        skus: [
            { type: "CTN", name: "IMITATION CRAB CLAW 人造蟹钳", packaging: "250g x 30t", itemCode: "40600" }
        ],
        scanned: false
    },
    {
        barcode: "40662",
        name: "IMITATION CRAB BITE 人造蟹粒",
        packaging: "1kg x 10p",
        skus: [
            { type: "CTN", name: "IMITATION CRAB BITE 人造蟹粒", packaging: "1kg x 10p", itemCode: "40662" }
        ],
        scanned: false
    },
    {
        barcode: "50266",
        name: "PANDY FISH 熊猫鱼饼",
        packaging: "500G X 20P",
        skus: [
            { type: "CTN", name: "PANDY FISH 熊猫鱼饼", packaging: "500G X 20P", itemCode: "50266" }
        ],
        scanned: false
    },
    {
        barcode: "62006",
        name: "Four Colour Roll 四色卷",
        packaging: "950g x 15p",
        skus: [
            { type: "CTN", name: "Four Colour Roll 四色卷", packaging: "950g x 15p", itemCode: "62006" }
        ],
        scanned: false
    },
    {
        barcode: "40676",
        name: "Fish Bean Curd Roll 炸豆皮卷",
        packaging: "825g x 8pkt",
        skus: [
            { type: "CTN", name: "Fish Bean Curd Roll 炸豆皮卷", packaging: "825g x 8pkt", itemCode: "40676" }
        ],
        scanned: false
    },
    {
        barcode: "60020",
        name: "Jumbo Fish Beancurd 海鲜大腐竹",
        packaging: "10's x 30pkt",
        skus: [
            { type: "CTN", name: "Jumbo Fish Beancurd 海鲜大腐竹", packaging: "10's x 30pkt", itemCode: "60020" }
        ],
        scanned: false
    },
    {
        barcode: "60030",
        name: "MINI BEANCURD 腐竹仔",
        packaging: "400G X 12P",
        skus: [
            { type: "CTN", name: "MINI BEANCURD 腐竹仔", packaging: "400G X 12P", itemCode: "60030" }
        ],
        scanned: false
    },
    {
        barcode: "40138",
        name: "GOLDEN BAR FISH CAKE 金条",
        packaging: "10's x 12pkt",
        skus: [
            { type: "CTN", name: "GOLDEN BAR FISH CAKE 金条", packaging: "10's x 12pkt", itemCode: "40138" }
        ],
        scanned: false
    },
    {
        barcode: "40101",
        name: "FISH CAKE (L) 大鱼饼",
        packaging: "20's x 7pkt",
        skus: [
            { type: "CTN", name: "FISH CAKE (L) 大鱼饼", packaging: "20's x 7pkt", itemCode: "40101" }
        ],
        scanned: false
    },
    {
        barcode: "40102",
        name: "FISH CAKE (M) 中鱼饼",
        packaging: "30's x 6pkt",
        skus: [
            { type: "CTN", name: "FISH CAKE (M) 中鱼饼", packaging: "30's x 6pkt", itemCode: "40102" }
        ],
        scanned: false
    },
    {
        barcode: "40104",
        name: "IMPROVED FISH CAKE 新大饼",
        packaging: "20's x 6pkt",
        skus: [
            { type: "CTN", name: "IMPROVED FISH CAKE 新大饼", packaging: "20's x 6pkt", itemCode: "40104" }
        ],
        scanned: false
    },
    {
        barcode: "40123",
        name: "H/MAKE VEG. FISH CAKE 手工菜饼",
        packaging: "11kg/ctn",
        skus: [
            { type: "CTN", name: "H/MAKE VEG. FISH CAKE 手工菜饼", packaging: "11kg/ctn", itemCode: "40123" }
        ],
        scanned: false
    },
    {
        barcode: "40120",
        name: "SAIDOU FISH CAKE (L) 大西刀",
        packaging: "10's x 10pkt",
        skus: [
            { type: "CTN", name: "SAIDOU FISH CAK - (L) 大西刀", packaging: "10's x 10pkt", itemCode: "40120" }
        ],
        scanned: false
    },
    {
        barcode: "40121",
        name: "SAIDOU FISH CAKE-(S) 小西刀",
        packaging: "10's x 20pkt",
        skus: [
            { type: "CTN", name: "SAIDOU FISH CAKE - (S) 小西刀", packaging: "10's x 20pkt", itemCode: "40121" }
        ],
        scanned: false
    },
    {
        barcode: "40113",
        name: "ABALONE FISH CAKE 鲍鱼饼",
        packaging: "30's x 6pkt",
        skus: [
            { type: "CTN", name: "ABALONE FISH CAKE 鲍鱼饼", packaging: "30's x 6pkt", itemCode: "40113" }
        ],
        scanned: false
    },
    {
        barcode: "40133",
        name: "SAI DOU FRIED FISH BALL 西刀炸丸",
        packaging: "30's x 8pkt",
        skus: [
            { type: "CTN", name: "SAI DOU FRIED FISH BALL 西刀炸丸", packaging: "30's x 8pkt", itemCode: "40133" }
        ],
        scanned: false
    },
    {
        barcode: "40139",
        name: "IMPROVED FISH CAKE (100G) 特大饼",
        packaging: "20's x 6pkt",
        skus: [
            { type: "CTN", name: "IMPROVED FISH CAKE (100G) 特大饼", packaging: "20's x 6pkt", itemCode: "40139" }
        ],
        scanned: false
    },
    {
        barcode: "40117",
        name: "FISH CAKE (L) - BLACK 黑大饼",
        packaging: "20's x 7pkt",
        skus: [
            { type: "CTN", name: "FISH CAKE (L) - BLACK 黑大饼", packaging: "20's x 7pkt", itemCode: "40117" }
        ],
        scanned: false
    },
    {
        barcode: "40706",
        name: "VP GOLDEN BAR   (VP)金条",
        packaging: "10's x 12pkt",
        skus: [
            { type: "CTN", name: "VP GOLDEN BAR (VP)金条", packaging: "10's x 12pkt", itemCode: "40706" }
        ],
        scanned: false
    },
    {
        barcode: "40110",
        name: "ROUND FISH CAKE 圆饼",
        packaging: "30's x 6pkt",
        skus: [
            { type: "CTN", name: "ROUND FISH CAKE 圆饼", packaging: "30's x 6pkt", itemCode: "40110" }
        ],
        scanned: false
    },
    {
        barcode: "RM033",
        name: "TG (10KG)",
        packaging: "10KG",
        skus: [
            { type: "CTN", name: "TG (10KG)", packaging: "10KG", itemCode: "RM033" }
        ],
        scanned: false
    },
    {
        barcode: "RM030",
        name: "K",
        packaging: "10KG",
        skus: [
            { type: "CTN", name: "K", packaging: "10KG", itemCode: "RM030" }
        ],
        scanned: false
    },
    {
        barcode: "RM031",
        name: "K1",
        packaging: "10KG",
        skus: [
            { type: "CTN", name: "K1", packaging: "10KG", itemCode: "RM031" }
        ],
        scanned: false
    },
        {
        barcode: "40441.1",
            name: "SOY FISH PILLOW  豆香片",
            packaging: "7kg x 1pkt",
            skus: [
                { type: "CTN", name: "豆香片(7kg)SOY FISH PILLOW", packaging: "7kg x 1pkt", itemCode: "40441.1" }
            ],
            scanned: false
        },
        {
        barcode: "50270",
            name: "FRUITY FISH CAKE  果香鱼饼",
            packaging: "500g x 20p",
            skus: [
                { type: "CTN", name: "FRUITY FISH CAKE  果香鱼饼", packaging: "500g x 20p", itemCode: "50270" }
            ],
            scanned: false
        },
        {
        barcode: "40650",
            name: "SHRIMP ROLL 虾仁卷 320g",
            packaging: "320g x 28pkt",
            skus: [
                { type: "CTN", name: "虾仁卷 SHRIMP ROLL", packaging: "320g x 28pkt", itemCode: "40650" }
            ],
            scanned: false
        }
    ];
let currentProduct = null;
let scanRecords = [];


// 初始化
window.onload = function() {
    renderProducts();
    updateProgress();
    document.getElementById('barcodeInput').focus();
}

function createCustomAlert() {
    // Create the styles
    const style = document.createElement('style');
    style.textContent = `
        .custom-alert {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 3000;
            animation: fadeIn 0.3s ease;
        }

        .custom-alert-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 20px;
            border-radius: 8px;
            width: 80%;
            max-width: 300px;
            text-align: center;
            animation: slideIn 0.3s ease;
        }

        .alert-button {
            margin-top: 15px;
            padding: 8px 20px;
            background: #64748b;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 1rem;
            cursor: pointer;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes slideIn {
            from { 
                opacity: 0;
                transform: translate(-50%, -60%);
            }
            to { 
                opacity: 1;
                transform: translate(-50%, -50%);
            }
        }
    `;
    document.head.appendChild(style);

    // Create the alert elements
    const alertDiv = document.createElement('div');
    alertDiv.className = 'custom-alert';
    alertDiv.id = 'customAlert';
    
    alertDiv.innerHTML = `
        <div class="custom-alert-content">
            <p id="alertMessage"></p>
            <button onclick="closeCustomAlert()" class="alert-button">确定 Confirm</button>
        </div>
    `;

    // Add click handler for closing when clicking outside
    alertDiv.addEventListener('click', function(e) {
        if (e.target === alertDiv) {
            closeCustomAlert();
        }
    });

    document.body.appendChild(alertDiv);
}

// Function to show custom alert
function showCustomAlert(message) {
    // Create alert elements if they don't exist
    if (!document.getElementById('customAlert')) {
        createCustomAlert();
    }
    
    const alertEl = document.getElementById('customAlert');
    const messageEl = document.getElementById('alertMessage');
    messageEl.textContent = message;
    alertEl.style.display = 'block';
    
    // Focus the OK button
    const button = alertEl.querySelector('button');
    if (button) button.focus();
}

// Function to close custom alert
function closeCustomAlert() {
    const alertEl = document.getElementById('customAlert');
    if (alertEl) {
        alertEl.style.display = 'none';
        
        // Restore focus to barcode input if on scan page
        if (document.getElementById('scanPage').classList.contains('active')) {
            document.getElementById('barcodeInput').focus();
        }
    }
}

// 渲染产品列表
function renderProducts() {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    
    const unscannedProducts = products.filter(p => !p.scanned);
    unscannedProducts.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product-item';
        div.onclick = () => showQuantityModal(product);
        div.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.packaging}</p>
        `;
        productList.appendChild(div);
    });
}

// 搜索产品
// Search product function - now includes delay handling
let searchTimeout;
function searchProduct() {
    const barcode = document.getElementById('barcodeInput').value.trim();
    if (!barcode) return;

    const product = products.find(p => p.barcode === barcode);

    if (product && !product.scanned) {
        showQuantityModal(product);
    } else if (product && product.scanned) {
        showCustomAlert('此产品已经盘点过了！This product has already been counted!');
    } else {
        showCustomAlert('未找到产品！No product found!');
    }

    document.getElementById('barcodeInput').value = '';
}
// Initialize
window.onload = function() {
    renderProducts();
    updateProgress();
    setupBarcodeInput();
}

// New function to setup barcode input with auto-trigger
function setupBarcodeInput() {
    const barcodeInput = document.getElementById('barcodeInput');
    
    // Focus the input when page loads
    barcodeInput.focus();
    
    // Add input event listener for auto-triggering
    barcodeInput.addEventListener('input', function(e) {
        // Clear any existing timeout
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }
        
        // Get the current input value
        const barcode = e.target.value.trim();
        
        // If the barcode is long enough (you can adjust this length)
        if (barcode.length >= 3) {  // Assuming minimum barcode length is 5
            // Set a small timeout to allow for complete barcode scan
            searchTimeout = setTimeout(() => {
                searchProduct();
            }, 300);  // 300ms delay, adjust as needed
        }
    });

    // Keep the Enter key functionality as backup
    barcodeInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            if (searchTimeout) {
                clearTimeout(searchTimeout);
            }
            searchProduct();
        }
    });
}
// 显示数量输入模态框
function showQuantityModal(product) {
    currentProduct = product;
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalPackaging').textContent = product.packaging;
    
    // Check product SKU types
    const hasCTN = product.skus.some(sku => sku.type === "CTN");
    const hasPKT = product.skus.some(sku => sku.type === "PKT");
    
    const boxQuantityInput = document.getElementById('boxQuantityInput');
    const boxQuantityLabel = boxQuantityInput.previousElementSibling;
    const pieceQuantityInput = document.getElementById('pieceQuantityInput');
    const pieceQuantityLabel = pieceQuantityInput.previousElementSibling;
    
    // Show/hide inputs based on SKU types
    if (hasCTN && !hasPKT) {
        // Only show CTN input
        boxQuantityInput.style.display = 'block';
        boxQuantityLabel.style.display = 'block';
        pieceQuantityInput.style.display = 'none';
        pieceQuantityLabel.style.display = 'none';
    } else if (!hasCTN && hasPKT) {
        // Only show PKT input
        boxQuantityInput.style.display = 'none';
        boxQuantityLabel.style.display = 'none';
        pieceQuantityInput.style.display = 'block';
        pieceQuantityLabel.style.display = 'block';
    } else if (hasCTN && hasPKT) {
        // Show both inputs
        boxQuantityInput.style.display = 'block';
        boxQuantityLabel.style.display = 'block';
        pieceQuantityInput.style.display = 'block';
        pieceQuantityLabel.style.display = 'block';
    }
    
    // Clear inputs
    boxQuantityInput.value = '';
    pieceQuantityInput.value = '';
    
    // Show modal
    document.getElementById('quantityModal').style.display = 'block';
    
    // Set focus after a short delay to ensure the modal is fully displayed
    setTimeout(() => {
        if (hasCTN && !hasPKT) {
            boxQuantityInput.focus();
        } else if (!hasCTN && hasPKT) {
            pieceQuantityInput.focus();
        } else if (hasCTN && hasPKT) {
            boxQuantityInput.focus();
        }
    }, 100); // Small delay to ensure modal is rendered
}

function closeModal() {
    document.getElementById('quantityModal').style.display = 'none';
    document.getElementById('barcodeInput').focus();
}


// 检查两个时间戳是否在同一分钟内
function isSameMinute(date1, date2) {
    return Math.abs(date1 - date2) < 60000; // 60000毫秒 = 1分钟
}

// 更新进度条
function updateProgress() {
    const total = products.length;
    const scanned = products.filter(p => p.scanned).length;
    const percentage = (scanned / total) * 100;
    
    document.getElementById('progressBar').style.width = percentage + '%';
    document.getElementById('progressText').textContent = `${scanned}/${total} 完成度 | Progress`;
}

// 渲染盘点记录
function formatDateToDDMMYYYY(dateString) {
    // First, split the dateString into date and time parts
    const [datePart, timePart] = dateString.split(' ');
    
    // If the date is already in DD/MM/YYYY format, return as is
    if (datePart.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
        return dateString;
    }
    
    // Otherwise, parse the date and convert
    const date = new Date(dateString);
    
    // Check if date is valid
    if (isNaN(date.getTime())) {
        console.error('Invalid date:', dateString);
        return 'Invalid Date';
    }
    
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const time = timePart || date.toLocaleTimeString('en-GB', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    return `${day}/${month}/${year} ${time}`;
}

// Convert date format for Google Sheets submission
function convertDateFormat(dateStr) {
    // Already in DD/MM/YYYY format, return as is
    return dateStr;
}

// Updated renderRecords function
function renderRecords() {
    const recordsList = document.getElementById('recordsList');
    recordsList.innerHTML = '';
    scanRecords.forEach((record, recordIndex) => {
        const div = document.createElement('div');
        div.className = 'record-group';
        
        // Format the timestamp using the new utility function
        const formattedTime = formatDateToDDMMYYYY(record.timestamp);
        let recordsHtml = `<div class="record-time">${formattedTime}</div>`;
        
        record.items.forEach((item, itemIndex) => {
            recordsHtml += `
                <div class="record-item" data-record="${recordIndex}" data-item="${itemIndex}">
                    <h3>${item.name}</h3>
                    <p>${item.packaging}</p>
                    <div class="records-quantity-group">
                        <div class="records-quantity-row">
                            <span class="records-quantity-label">箱 | CTN:</span>
                            <span class="records-quantity-value box-quantity"><strong>${item.boxQuantity}</strong></span>
                        </div>
                        <div class="records-quantity-row">
                            <span class="records-quantity-label">包 | PKT:</span>
                            <span class="records-quantity-value piece-quantity"><strong>${item.pieceQuantity}</strong></span>
                        </div>
                    </div>
                </div>
            `;
        });
        div.innerHTML = recordsHtml;
        
        // Make the div itself store the indices
        div.dataset.record = record.items[0] ? recordIndex : '';
        div.dataset.item = record.items[0] ? '0' : '';
        
        // Add double-click handler to the entire group
        div.addEventListener('dblclick', (event) => {
            // Prevent event from bubbling up
            event.stopPropagation();
            
            const recordIndex = div.dataset.record;
            const itemIndex = div.dataset.item;
            
            if (recordIndex !== '' && itemIndex !== '') {
                editRecordGroup(div, parseInt(recordIndex), parseInt(itemIndex));
            }
        });
        
        recordsList.appendChild(div);
    });
}

function editRecordGroup(groupElement, recordIndex, itemIndex) {
    // Check if already editing
    if (groupElement.classList.contains('editing')) {
        return;
    }
    
    // Add editing class for visual feedback
    groupElement.classList.add('editing');
    
    const record = scanRecords[recordIndex].items[itemIndex];
    const boxQuantitySpan = groupElement.querySelector('.box-quantity');
    const pieceQuantitySpan = groupElement.querySelector('.piece-quantity');
    
    // Create input for box quantity
    const boxInput = document.createElement('input');
    boxInput.type = 'number';
    boxInput.className = 'records-quantity-input';
    boxInput.value = record.boxQuantity;
    boxInput.min = '0';
    
    // Create input for piece quantity
    const pieceInput = document.createElement('input');
    pieceInput.type = 'number';
    pieceInput.className = 'records-quantity-input';
    pieceInput.value = record.pieceQuantity;
    pieceInput.min = '0';
    
    // Replace spans with inputs
    boxQuantitySpan.innerHTML = '';
    boxQuantitySpan.appendChild(boxInput);
    pieceQuantitySpan.innerHTML = '';
    pieceQuantitySpan.appendChild(pieceInput);
    
    // Focus first input
    boxInput.focus();
    
    function saveChanges() {
        if (!groupElement.classList.contains('editing')) {
            return; // Prevent double-saving
        }
        
        const newBoxQuantity = boxInput.value !== '' ? parseInt(boxInput.value) : 0;
        const newPieceQuantity = pieceInput.value !== '' ? parseInt(pieceInput.value) : 0;
        
        // Update data structure
        scanRecords[recordIndex].items[itemIndex].boxQuantity = newBoxQuantity;
        scanRecords[recordIndex].items[itemIndex].pieceQuantity = newPieceQuantity;
        
        // Update display
        boxQuantitySpan.innerHTML = `<strong>${newBoxQuantity}</strong>`;
        pieceQuantitySpan.innerHTML = `<strong>${newPieceQuantity}</strong>`;
        
        // Remove editing class
        groupElement.classList.remove('editing');
        
        // Remove click outside listener
        document.removeEventListener('click', handleClickOutside);
        
        // Show success message for local update
        showCustomAlert('记录已更新！Record Updated!');
    }
    
    // Handle input events
    boxInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            pieceInput.focus();
        }
    });
    
    pieceInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            saveChanges();
        }
    });
    
    // Save on blur of last input
    pieceInput.addEventListener('blur', () => {
        // Small timeout to allow for double-click to work properly
        setTimeout(saveChanges, 200);
    });
    
    // Handle clicks outside
    function handleClickOutside(e) {
        if (!groupElement.contains(e.target)) {
            saveChanges();
        }
    }
    
    // Add click outside listener after a small delay to prevent immediate triggering
    setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
    }, 100);
}
// 显示指定页面
function showPage(pageName) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(`${pageName}Page`).classList.add('active');
    
    if (pageName === 'scan') {
        document.getElementById('barcodeInput').focus();
    }
}

// 支持回车键搜索
document.getElementById('barcodeInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchProduct();
    }
});

// 支持回车键在数量输入框之间切换和提交
document.getElementById('boxQuantityInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('pieceQuantityInput').focus();
    }
});

document.getElementById('pieceQuantityInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        submitQuantity();
    }
});

function checkInternetConnection() {
    return navigator.onLine;
}

// Function to save data to session storage
function saveToSessionStorage(data) {
    const existingData = JSON.parse(sessionStorage.getItem('pendingSubmissions') || '[]');
    existingData.push(data);
    sessionStorage.setItem('pendingSubmissions', JSON.stringify(existingData));
}

// Function to get and clear pending submissions
function getPendingSubmissions() {
    const pending = sessionStorage.getItem('pendingSubmissions');
    sessionStorage.removeItem('pendingSubmissions');
    return pending ? JSON.parse(pending) : [];
}

// Modified submit function with offline support
async function submitToGoogleSheet() {
    const counter = document.getElementById('counterSelect').value;
    const LOCATION = 'B15';
    
    if (!counter) {
        showCustomAlert('请选择盘点人员！Please choose the staff for inventory count!');
        return;
    }
    
    if (scanRecords.length === 0) {
        showCustomAlert('没有可提交的记录！There are no records to submit!');
        return;
    }

    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.style.display = 'block';

    try {
        function formatDateForGoogleSheets(dateStr) {
            // Extract date part (before the space)
            const [datePart, timePart] = dateStr.split(' ');
            
            // Split the date into components
            const [day, month, year] = datePart.split('/');
            
            // Format as DD/MM/YYYY explicitly
            return `${day}/${month}/${year}`;
        }

        const data = scanRecords.flatMap(record => 
            record.items.map(item => {
                const product = products.find(p => p.name === item.name);
                const ctnSku = product.skus.find(sku => sku.type === "CTN");
                const pktSku = product.skus.find(sku => sku.type === "PKT");
                
                const [date, time] = item.timestamp.split(' ');
                
                return {
                    sheetName: LOCATION,
                     date: formatDateForGoogleSheets(item.timestamp),  // Use new format function
                    time: time,
                    name: item.name,
                    packaging: item.packaging,
                    boxQuantity: item.boxQuantity,
                    pieceQuantity: item.pieceQuantity,
                    ctnItemCode: ctnSku ? ctnSku.itemCode : '',
                    pktItemCode: pktSku ? pktSku.itemCode : '',
                    counter: counter
                };
            })
        );

        // Check internet connection
        if (!checkInternetConnection()) {
            saveToSessionStorage(data);
            showCustomAlert('无网络连接。数据已保存，将在有网络时自动提交。No network connection. Data has been saved and will be automatically submitted when the network is available.');
            return;
        }

        // Try to submit any pending data first
        const pendingSubmissions = getPendingSubmissions();
        if (pendingSubmissions.length > 0) {
            for (const pendingData of pendingSubmissions) {
                const response = await fetch('https://script.google.com/macros/s/AKfycbyJckzalJVidtiiih_aBZc_Ec-KW92eJgke5xRgIGte7hMUzvVKx4MhzSXwxzvS-28/exec', {
                    method: 'POST',
                    body: JSON.stringify(pendingData)
                });
                if (!response.ok) {
                    throw new Error('提交历史数据失败 Historical data submission failed');
                }
            }
        }

        // Submit current data
        const response = await fetch('https://script.google.com/macros/s/AKfycbyJckzalJVidtiiih_aBZc_Ec-KW92eJgke5xRgIGte7hMUzvVKx4MhzSXwxzvS-28/exec', {
            method: 'POST',
            body: JSON.stringify(data)
        });

        if (response.ok) {
            showCustomAlert('数据提交成功！Submission completed successfully!');
            scanRecords = [];
            renderRecords();
        } else {
            throw new Error('提交失败 Failed to submit');
        }
    } catch (error) {
        console.error('Error:', error);
        saveToSessionStorage(data);
        showCustomAlert('提交失败，数据已保存，将在下次提交时重试！Submission failed. Data has been saved and will be retried on the next submission attempt!');
    } finally {
        loadingOverlay.style.display = 'none';
    }
}

// Add event listeners for online/offline status
window.addEventListener('online', async () => {
    const pendingSubmissions = getPendingSubmissions();
    if (pendingSubmissions.length > 0) {
        showCustomAlert('检测到网络连接，正在提交保存的数据...Network connection detected, submitting saved data...');
        await submitToGoogleSheet();
    }
});

window.addEventListener('offline', () => {
    showCustomAlert('网络连接已断开。数据将保存在本地。Network connection has been disconnected. Data will be saved locally.');
});
// Also update where you create the record to store date and time separately
function submitQuantity() {
    const boxQuantity = parseInt(document.getElementById('boxQuantityInput').value) || 0;
    const pieceQuantity = parseInt(document.getElementById('pieceQuantityInput').value) || 0;

    if (boxQuantity === 0 && pieceQuantity === 0) {
        showCustomAlert('请至少输入一个数量！Please enter at least one quantity!');
        return;
    }

    currentProduct.scanned = true;

    // Create timestamp with correct format
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    const time = now.toLocaleTimeString('en-GB', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    const formattedDate = `${day}/${month}/${year}`;
    const timestamp = `${formattedDate} ${time}`;

    const record = {
        timestamp: timestamp,
        items: [{
            name: currentProduct.name,
            packaging: currentProduct.packaging,
            boxQuantity: boxQuantity,
            pieceQuantity: pieceQuantity,
            timestamp: timestamp
        }]
    };

    scanRecords.unshift(record);
    renderRecords();
    renderProducts();
    updateProgress();
    closeModal();
}
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/B15-Stock-Take/service-worker.js').then(reg => {
    reg.update();
  });
}
function checkForUpdates() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistration().then(reg => {
      if (reg) reg.update();
    });
  }
}
