<template><div><h1 id="new-purchase-inventory" tabindex="-1"><a class="header-anchor" href="#new-purchase-inventory"><span>New Purchase &amp; Inventory</span></a></h1>
<h2 id="采购模块各表单及结构" tabindex="-1"><a class="header-anchor" href="#采购模块各表单及结构"><span>采购模块各表单及结构：</span></a></h2>
<h2 id="purchase" tabindex="-1"><a class="header-anchor" href="#purchase"><span>Purchase:</span></a></h2>
<h3 id="_1-采购申请-purchase-request" tabindex="-1"><a class="header-anchor" href="#_1-采购申请-purchase-request"><span>1. 采购申请 | Purchase Request</span></a></h3>
<h4 id="字段" tabindex="-1"><a class="header-anchor" href="#字段"><span>字段</span></a></h4>
<ul>
<li>
<p>Status of Request (auto)：</p>
<ul>
<li>Submitted: 提交后初始状态</li>
<li>Compeleted: 所有Purchase item已签收 （Status of Goods 为 <strong>Received</strong>）。</li>
</ul>
</li>
<li>
<p>采购用途 | Justification（required）</p>
</li>
<li>
<p>PurchaseRequest_ID (auto)</p>
</li>
<li>
<p>Requestor (auto): 当前用户</p>
</li>
<li>
<p>Purchase Request Date (auto): 当前时间</p>
</li>
<li>
<p>备注 | Remark: 用户可以通过此字段备注需要采购人员了解的事项。</p>
</li>
<li>
<p>预估请购总价 | Estimated Total (auto)</p>
</li>
<li>
<p>到货数 (auto)</p>
</li>
<li>
<p>请购项目数 (auto)</p>
</li>
</ul>
<h4 id="关联表单" tabindex="-1"><a class="header-anchor" href="#关联表单"><span>关联表单</span></a></h4>
<ul>
<li>Purchase Item</li>
</ul>
<h4 id="视图" tabindex="-1"><a class="header-anchor" href="#视图"><span>视图</span></a></h4>
<ul>
<li>All</li>
</ul>
<h4 id="business-rules" tabindex="-1"><a class="header-anchor" href="#business-rules"><span>Business Rules</span></a></h4>
<ul>
<li>None</li>
</ul>
<h4 id="权限设置" tabindex="-1"><a class="header-anchor" href="#权限设置"><span>权限设置</span></a></h4>
<ul>
<li>APTC Members:
<ul>
<li>View (All)</li>
<li>Edit (Owner)</li>
</ul>
</li>
</ul>
<h3 id="_2-采购明细-purchase-item" tabindex="-1"><a class="header-anchor" href="#_2-采购明细-purchase-item"><span>2. 采购明细 | Purchase Item</span></a></h3>
<h4 id="字段-1" tabindex="-1"><a class="header-anchor" href="#字段-1"><span>字段</span></a></h4>
<h5 id="tab-basic" tabindex="-1"><a class="header-anchor" href="#tab-basic"><span>Tab - Basic:</span></a></h5>
<ul>
<li>
<p>Status of Goods (auto):</p>
<ul>
<li>Initial: 提交后初始状态</li>
<li>Purchasing: 采购人员提交采购单 <strong>Create PO确认购买</strong> 后</li>
<li>Reveived: 采购人员收到货 <strong>签收</strong> 后</li>
<li>Stocked: 货物执行 <strong>入库</strong> 后</li>
<li>Rejected: 驳回</li>
</ul>
</li>
<li>
<p>Project Related:</p>
<ul>
<li>RMP/PTP: 勾选后所购买项目会被标记为RMP/PTP专用，也会方便后续统计此项目花费</li>
<li>Other: 其他项目也可添加选项或使用other</li>
</ul>
</li>
<li>
<p>Requisitioner | 请购员 (auto): 当前用户</p>
</li>
<li>
<p>购买数量 | Number</p>
</li>
<li>
<p>采购单位 | Unit</p>
</li>
<li>
<p>货号 | Product Number</p>
</li>
<li>
<p>单价 | Price</p>
</li>
<li>
<p>总价 | Total Price (auto)</p>
</li>
<li>
<p>MSDS</p>
</li>
<li>
<p>报价单 | Quotation</p>
</li>
<li>
<p>备注 | Remark</p>
</li>
<li>
<p>纯度等级 | Purity Grade</p>
</li>
<li>
<p>纯度 | Purity</p>
</li>
</ul>
<h5 id="tab-stock-records" tabindex="-1"><a class="header-anchor" href="#tab-stock-records"><span>Tab - Stock Records:</span></a></h5>
<ul>
<li>入库数量: 此单下入库的数量，单位为采购单位。</li>
</ul>
<h5 id="tab-receipt-info" tabindex="-1"><a class="header-anchor" href="#tab-receipt-info"><span>Tab - Receipt Info.:</span></a></h5>
<p>由采购人员签收时填写</p>
<ul>
<li>Status of Package:
<ul>
<li>Good</li>
<li>Broken</li>
<li>Partial Received</li>
</ul>
</li>
<li>Receipt Information</li>
</ul>
<h4 id="关联表单-1" tabindex="-1"><a class="header-anchor" href="#关联表单-1"><span>关联表单</span></a></h4>
<h5 id="tab-basic-1" tabindex="-1"><a class="header-anchor" href="#tab-basic-1"><span>Tab - Basic:</span></a></h5>
<ul>
<li>Material: <strong>物料清单 | Material List</strong></li>
<li>Purchase Request: <strong>采购申请 | Purchase Request</strong></li>
<li>Purchase Order: <strong>采购单 | Purchase Order</strong></li>
<li>供应商 | Supplier: <strong>供应商清单 | Supplier List</strong></li>
</ul>
<h5 id="tab-stock-records-1" tabindex="-1"><a class="header-anchor" href="#tab-stock-records-1"><span>Tab - Stock Records:</span></a></h5>
<ul>
<li>入库单: <strong>入库单</strong></li>
<li>入库明细: <strong>库存明细 | Inventory Details</strong></li>
</ul>
<h4 id="按钮" tabindex="-1"><a class="header-anchor" href="#按钮"><span>按钮</span></a></h4>
<p>Single Data Source:</p>
<ul>
<li>
<p>入库:</p>
<ul>
<li>Action: 弹出<strong>入库单</strong>，触发 <strong>新建入库单</strong> workflow。(参见Changelog-入库单-workflow)</li>
<li>Conditional: Status of Goods <strong>Is one of</strong> Received</li>
</ul>
</li>
<li>
<p>签收:</p>
<ul>
<li>Action:
<ul>
<li>弹出窗口，填写 <strong>Status of Package</strong>, <strong>Receipt Information</strong></li>
<li>若 Status of Package 为 <strong>Good</strong>, 更新 Status of Goods 为 <strong>Received</strong>
<ul>
<li>若入库数 = 采购，则更新采购单状态为 <strong>GR</strong></li>
<li>若入库数 &lt; 采购，则更新采购单状态为 <strong>Partial GR</strong></li>
<li>若到货数 = 请购项目数，则更新请购单状态为 <strong>Compeleted</strong></li>
</ul>
</li>
</ul>
</li>
<li>Conditional: Status of Goods <strong>Is one of</strong> Purchasing</li>
</ul>
</li>
</ul>
<p>Batch Data Source:</p>
<ul>
<li>生成采购单:
<ul>
<li>Action: 合并采购项目生成一条 <strong>采购单 | Purchase Order</strong></li>
<li>Conditional: Status of Goods <strong>is</strong> Initial</li>
</ul>
</li>
</ul>
<h3 id="_3-采购单-purchase-order" tabindex="-1"><a class="header-anchor" href="#_3-采购单-purchase-order"><span>3. 采购单 | Purchase Order</span></a></h3>
<h4 id="字段-2" tabindex="-1"><a class="header-anchor" href="#字段-2"><span>字段</span></a></h4>
<ul>
<li>PurchaseOrder_ID</li>
<li>Status of Order (auto):
<ul>
<li>Initial: 提交后初始状态</li>
<li>Purchasing: 点击 <strong>Create PO确认采购</strong> 后</li>
<li>Partial GR:</li>
<li>GR</li>
<li>Cancel: 取消该订单。</li>
</ul>
</li>
<li>PO Number</li>
<li>实际总花费 | Total: 采购人员填写该订单实际花费。</li>
<li>备注 | Remark</li>
<li>汇总金额 (auto): 汇总所列项目金额，原则上应与实际总花费一致。</li>
<li>入库明细数</li>
<li>采购明细数</li>
</ul>
<h4 id="关联表单-2" tabindex="-1"><a class="header-anchor" href="#关联表单-2"><span>关联表单</span></a></h4>
<p>-Purchase Item</p>
<h4 id="按钮-1" tabindex="-1"><a class="header-anchor" href="#按钮-1"><span>按钮</span></a></h4>
<p>Single Data Source:</p>
<ul>
<li>
<p>Create PO确认采购:</p>
<ul>
<li>Action: 弹出窗口，采购人员填写 PO Number， 实际总花费 | Total</li>
<li>Conditional: Status of Order <strong>Is one of</strong> Initial</li>
</ul>
</li>
<li>
<p>取消采购:</p>
<ul>
<li>Action: 将此采购单状态更改为Cancel</li>
<li>Conditional: Status of Order <strong>Is one of</strong> Initial</li>
</ul>
</li>
</ul>
<h4 id="business-rules-1" tabindex="-1"><a class="header-anchor" href="#business-rules-1"><span>Business Rules</span></a></h4>
<ul>
<li>When <strong>Status of Order is Cancel</strong> then <strong>Read-only all fields</strong></li>
</ul>
<h2 id="change-log" tabindex="-1"><a class="header-anchor" href="#change-log"><span>Change Log</span></a></h2>
<h3 id="_1-入库单" tabindex="-1"><a class="header-anchor" href="#_1-入库单"><span>1. 入库单</span></a></h3>
<h4 id="字段-3" tabindex="-1"><a class="header-anchor" href="#字段-3"><span>字段</span></a></h4>
<ul>
<li>入库方式 | Stocking Method</li>
<li>Operator</li>
<li>Operate Date</li>
<li>入库数量 | Number</li>
<li>Batch Number | 批号</li>
<li>有效期至 | Expired Date</li>
<li>COA</li>
<li>MSDS</li>
</ul>
<h4 id="关联表单-3" tabindex="-1"><a class="header-anchor" href="#关联表单-3"><span>关联表单</span></a></h4>
<ul>
<li>采购明细 | Purchase Item</li>
<li>物料清单 | Material List</li>
<li>Storage Area List</li>
<li>库存明细 | Inventory Details</li>
</ul>
<h4 id="workflow" tabindex="-1"><a class="header-anchor" href="#workflow"><span>Workflow</span></a></h4>
<h5 id="when-adding-new-records" tabindex="-1"><a class="header-anchor" href="#when-adding-new-records"><span>When adding new records:</span></a></h5>
<ul>
<li>
<p>当MSDS不为空，更新物料清单中的MSDS （可能会出问题，若有人上传错误文件，则该条目下物料则使用错误文件）</p>
</li>
<li>
<p>若入库方式为合并入库:</p>
<ul>
<li>当Material Type <strong>is any of</strong> 甲类，管控，标准品，Micro-key,Consumable-key:
<ul>
<li>新建一条库存记录，call PBP - <strong>出入库记录</strong></li>
</ul>
</li>
<li>当Material Type <strong>is none of</strong> 甲类，管控，标准品，Micro-key,Consumable-key:
<ul>
<li>若不存在该物料:
<ul>
<li>新建一条库存记录，call PBP - <strong>出入库记录</strong></li>
</ul>
</li>
<li>若已存在该物料:
<ul>
<li>更新该物料批号，入库日期</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>若入库方式为拆分入库:</p>
<ul>
<li>根据入库数量，创建n个相同的库存记录。call PBP - <strong>出入库记录</strong></li>
</ul>
</li>
<li>
<p>更新 Status of Goods 为 <strong>Stocked</strong></p>
</li>
</ul>
<h3 id="_2-盘点单" tabindex="-1"><a class="header-anchor" href="#_2-盘点单"><span>2. 盘点单</span></a></h3>
<h4 id="字段-4" tabindex="-1"><a class="header-anchor" href="#字段-4"><span>字段</span></a></h4>
<ul>
<li>Operator</li>
<li>Operate Date</li>
<li>实际库存 | Number</li>
<li>领用单位 | Unit</li>
</ul>
<h4 id="关联表单-4" tabindex="-1"><a class="header-anchor" href="#关联表单-4"><span>关联表单</span></a></h4>
<ul>
<li>库存明细 | Inventory Details</li>
</ul>
<h4 id="workflow-1" tabindex="-1"><a class="header-anchor" href="#workflow-1"><span>Workflow</span></a></h4>
<h5 id="when-adding-new-records-1" tabindex="-1"><a class="header-anchor" href="#when-adding-new-records-1"><span>When adding new records:</span></a></h5>
<ul>
<li>更新相关库存记录，call PBP - <strong>出入库记录</strong></li>
</ul>
<h3 id="_3-领用单-general" tabindex="-1"><a class="header-anchor" href="#_3-领用单-general"><span>3. 领用单（General）</span></a></h3>
<h4 id="字段-5" tabindex="-1"><a class="header-anchor" href="#字段-5"><span>字段</span></a></h4>
<ul>
<li>领用量 | Number</li>
<li>领用单位 | Unit</li>
<li>领用人 | User</li>
<li>领用日期 | Usage Date</li>
</ul>
<h4 id="关联表单-5" tabindex="-1"><a class="header-anchor" href="#关联表单-5"><span>关联表单</span></a></h4>
<ul>
<li>库存明细 | Inventory Details</li>
</ul>
<h4 id="business-rules-2" tabindex="-1"><a class="header-anchor" href="#business-rules-2"><span>Business Rules</span></a></h4>
<ul>
<li>When <strong>领用方式 | Use Type</strong> is <strong>单次领用 | Single Use</strong>，Show <strong>领用量 | Number</strong>，Required <strong>领用量 | Number</strong></li>
</ul>
<h4 id="workflow-2" tabindex="-1"><a class="header-anchor" href="#workflow-2"><span>Workflow</span></a></h4>
<h5 id="when-adding-new-records-2" tabindex="-1"><a class="header-anchor" href="#when-adding-new-records-2"><span>When adding new records:</span></a></h5>
<ul>
<li>更新相关库存记录，call PBP - <strong>出入库记录</strong></li>
<li>当领用方式为单次领用时:
<ul>
<li>扣减库存为领用量，标记operation为<strong>单次领用</strong></li>
</ul>
</li>
<li>当领用方式为用后归还时，
<ul>
<li>扣减库存为0，标记operation为<strong>领用待归还</strong></li>
</ul>
</li>
</ul>
<h3 id="_4-归还单" tabindex="-1"><a class="header-anchor" href="#_4-归还单"><span>4. 归还单</span></a></h3>
<h4 id="字段-6" tabindex="-1"><a class="header-anchor" href="#字段-6"><span>字段</span></a></h4>
<ul>
<li>领用量 | Number</li>
<li>库存单位 | Unit</li>
<li>归还员 | Returner</li>
<li>归还日期 | Return Date</li>
</ul>
<h4 id="关联表单-6" tabindex="-1"><a class="header-anchor" href="#关联表单-6"><span>关联表单</span></a></h4>
<ul>
<li>库存明细 | Inventory Details</li>
</ul>
<h4 id="workflow-3" tabindex="-1"><a class="header-anchor" href="#workflow-3"><span>Workflow</span></a></h4>
<h5 id="when-adding-new-records-3" tabindex="-1"><a class="header-anchor" href="#when-adding-new-records-3"><span>When adding new records:</span></a></h5>
<ul>
<li>更新相关库存记录，call PBP - <strong>出入库记录</strong></li>
</ul>
<h2 id="inventory" tabindex="-1"><a class="header-anchor" href="#inventory"><span>Inventory</span></a></h2>
<h3 id="_1-index" tabindex="-1"><a class="header-anchor" href="#_1-index"><span>1. Index</span></a></h3>
<h4 id="字段-7" tabindex="-1"><a class="header-anchor" href="#字段-7"><span>字段</span></a></h4>
<ul>
<li>Has CAS Number？
<ul>
<li>Yes</li>
<li>No</li>
</ul>
</li>
<li>Chinese Name</li>
<li>English Name</li>
<li>别名 | Synonyms: 此处可写任意多个中文或英文名称，仅为方便查找，不会改变标准命名</li>
</ul>
<h3 id="_2-物料清单-material-list" tabindex="-1"><a class="header-anchor" href="#_2-物料清单-material-list"><span>2. 物料清单 | Material List</span></a></h3>
<h4 id="字段-8" tabindex="-1"><a class="header-anchor" href="#字段-8"><span>字段</span></a></h4>
<ul>
<li>物料清单 | Material List</li>
</ul>
</div></template>


