import { Platform } from 'react-native';
import {
    getAndroidIdSync,
    // getApiLevelSync,
    // getApplicationName,
    // getAvailableLocationProvidersSync,
    // getBaseOsSync,
    // getBatteryLevelSync,
    // getBootloaderSync,
    getBrand,
    // getBrightnessSync,
    // getBuildIdSync,
    // getBuildNumber,
    // getBundleId,
    // getCarrierSync,
    // getCodenameSync,
    // getDeviceId,
    getDeviceNameSync,
    getDeviceSync,
    // getDeviceToken,
    getDeviceTypeSync,
    // getDisplaySync,
    getFingerprintSync,
    getFirstInstallTimeSync,
    // getFontScaleSync,
    // getFreeDiskStorageOldSync,
    // getFreeDiskStorageSync,
    // getHardwareSync,
    // getHostNamesSync,
    // getHostSync,
    // getIncrementalSync,
    // getInstallerPackageNameSync,
    // getInstallReferrerSync,
    // getInstanceIdSync,
    // getIpAddressSync,
    getLastUpdateTimeSync,
    // getMacAddress,
    getManufacturerSync,
    getMaxMemorySync,
    // getPowerStateSync,
    // getPreviewSdkIntSync,
    // getProductSync,
    // getReadableVersion,
    // getSecurityPatchSync,
    // getSerialNumberSync,
    // getStartupTimeSync,
    // getSupportedMediaTypeListSync,
    // getSystemAvailableFeaturesSync,
    getSystemName,
    // getTags,
    // getTotalDiskCapacityOldSync,
    // getTotalDiskCapacitySync,
    // getTotalMemory,
    // getTypeSync,
    getUniqueIdSync,
    // getUsedMemorySync,
    getUserAgentSync,
    // getVersion,
    // hasDynamicIsland,
    // hasGmsSync, hasHmsSync, hasNotch,
    // hasSystemFeatureSync,
    // isAirplaneModeSync,
    // isBatteryChargingSync,
    // isBluetoothHeadphonesConnectedSync,
    // isCameraPresentSync,
    // isDisplayZoomed,
    // isEmulator,
    // isHeadphonesConnectedSync,
    // isKeyboardConnectedSync,
    // isLandscapeSync,
    // isLocationEnabledSync,
    // isLowRamDevice,
    // isMouseConnectedSync,
    // isPinOrFingerprintSetSync,
    // isTablet,
    // isTabletMode,
    // isWiredHeadphonesConnectedSync,
    // supported32BitAbisSync,
    // supported64BitAbisSync,
    // supportedAbisSync,
    syncUniqueId,
} from 'react-native-device-info';

export async function getDeviceInfo() {
    try {
        // return {
        //     androidId: getAndroidIdSync(), // 获取 Android ID
        //     apiLevel: getApiLevelSync(), // 获取 API 级别
        //     applicationName: getApplicationName(), // 获取应用名称
        //     availableLocationProviders: getAvailableLocationProvidersSync(), // 返回平台特定位置提供商/服务的对象，并带有当前是否可用的布尔值。{ gps: true,network: true, }
        //     baseOs: getBaseOsSync(), // 产品所基于的基础操作系统  "Windows", "Android" etc
        //     buildId: getBuildIdSync(), // 获取构建时的操作系统的版本号。
        //     batteryLevel: getBatteryLevelSync(), // 以浮点形式获取设备的电池电量，浮点范围在 0 和 1 之间
        //     bootloader: getBootloaderSync(), // 系统引导加载程序版本号
        //     brand: getBrand(), // 获取设备品牌
        //     buildNumber: getBuildNumber(), // 获取应用程序的构建编号
        //     bundleId: getBundleId(), // 获取应用程序捆绑包标识符
        //     isCameraPresent: isCameraPresentSync(), // 说明设备现在是否有摄像头；支持热添加/移除摄像机。返回摄像头的实际存在状态。如果摄像头存在，但您的应用程序没有使用权限，isCameraPresent 仍会返回 true
        //     carrier: getCarrierSync(), // 获取运营商名称（网络运营商）
        //     codeName: getCodenameSync(), // 当前的开发代号，如果是发布版本，则为字符串 "REL"
        //     device: getDeviceSync(), // 工业设计的名称
        //     deviceId: getDeviceId(), // 获取设备 ID
        //     deviceType: getDeviceTypeSync(), // 以字符串形式返回设备类型，该字符串将是以下字符之一：Handset,Tablet,Tv,Desktop,GamingConsole,Headset,unknown
        //     display: getDisplaySync(), // 用于向用户显示的构建 ID 字符串。
        //     deviceName: getDeviceNameSync(), // 获取设备名称。
        //     deviceToken: await getDeviceToken(), // 获取设备令牌（请参阅 DeviceCheck）。仅适用于 iOS 11.0 及以上版本的真实设备。当 getDeviceToken 不被支持时，此功能将拒绝承诺，请注意异常处理
        //     firstInstallTime: getFirstInstallTimeSync(), // 获取应用程序首次安装的时间（毫秒）
        //     fingerprint: getFingerprintSync(), // 唯一标识此构建的字符串。
        //     fontScale: getFontScaleSync(), // 获取设备字体比例。字体比例是当前系统字体与 "正常 "字体大小的比率，因此如果正常文本为 10pt 而系统字体当前为 15pt，则字体比例为 1.5

        //     /*
        //     *    获取可用存储空间大小（以 bytes 为单位）的方法，同时考虑根文件系统和数据文件系统的计算。
        //     *    在 iOS 上，该方法接受以下可选参数：
        //     *    total：使用 volumeAvailableCapacityKey
        //     *    important： 使用 volumeAvailableCapacityForImportantUsageKey：使用 volumeAvailableCapacityForImportantUsageKey
        //     *    opportunistic"：使用 volumeAvailableCapacityForOpportunisticUsageKey
        //     */
        //     freeDiskStorage: getFreeDiskStorageSync(),
        //     freeDiskStorageOld: getFreeDiskStorageOldSync(), // 以字节为单位获取可用存储空间大小的方法的旧实现
        //     hardware: getHardwareSync(), // 硬件名称（来自内核命令行或 /proc）
        //     host: getHostSync(), // 主机名，比如：wprd10.hot.corp.google.com
        //     hostNames: getHostNamesSync(),
        //     ipAddress: getIpAddressSync(), // react-native-network-info 来获取 IP 地址
        //     incremental: getIncrementalSync(), // 底层源控制用于表示此构建的内部值
        //     installerPackageName: getInstallerPackageNameSync(), // 底层源控制用于表示此构建的内部值
        //     installReferrer: getInstallReferrerSync(), // 安装应用程序时获取引用字符串
        //     instanceId: getInstanceIdSync(), // java.util.UUID.randomUUID() 生成的 id
        //     lastUpdateTime: getLastUpdateTimeSync(), // 获取应用程序最后一次更新的时间（毫秒）
        //     macAddress: getMacAddress(), // 获取网络适配器 MAC 地址
        //     manufacturer: getManufacturerSync(), // 获取设备制造商
        //     maxMemory: getMaxMemorySync(), // 返回虚拟机尝试使用的最大内存容量（以字节为单位）。
        //     model: getDeviceId(), // 设备 id
        //     powerState: getPowerStateSync(), // 获取设备的电源状态，包括电池电量、是否已插入电源以及系统当前是否处于低功耗模式。如果未启用电池监控，或在模拟器上尝试（无法监控），则会在 iOS 上显示警告信息
        //     product: getProductSync(), // 整个产品的名称。
        //     previewSdkInt: getPreviewSdkIntSync(), // 预发布 SDK 的开发人员预览版
        //     readableVersion: getReadableVersion(), // 获取应用程序的人可读版本（与 getVersion() + '.' + getBuildNumber() 相同）
        //     serialNumber: getSerialNumberSync(), // 获取设备序列号。几乎在所有情况下都会是 "未知"，除非你有一个特权应用程序，而且你知道自己在做什么
        //     securityPatch: getSecurityPatchSync(), // 用户可见的安全补丁级别
        //     startUpTime: getStartupTimeSync(), // 获取当前应用程序进程启动的时间（毫秒）
        //     systemAvailableFeatures: getSystemAvailableFeaturesSync(), // 返回 Android 可用系统功能列表
        //     systemName: getSystemName(), // 获取设备操作系统名称
        //     tags: getTags(), // 以逗号分隔的描述构建的标记
        //     type: getTypeSync(), // 构建类型
        //     totalDiskCapacity: getTotalDiskCapacitySync(), // 以字节为单位获取全磁盘存储大小的方法，同时考虑根文件系统和数据文件系统的计算
        //     totalDiskCapacityOld: getTotalDiskCapacityOldSync(),
        //     totalMemory: getTotalMemory(),  // 以字节为单位获取设备总内存。
        //     uniqueId: getUniqueIdSync(), // 在某些应用程序商店（如华为或 Google Play），该标识符被视为敏感信息，如果未经用户同意或用于未经批准的目的，可能导致应用程序被删除或拒绝。有关详细信息，请参阅商店政策（见下文注释）。 获取设备唯一 ID。在 Android 上，它目前与本模块中的 getAndroidId() 相同。在 iOS 上，它使用 DeviceUID uid 标识符。在 Windows 上，它使用 Windows.Security.ExchangeActiveSyncProvisioning.EasClientDeviceInformation.id ID
        //     usedMemory: getUsedMemorySync(), // 以字节为单位获取应用程序的内存使用情况
        //     userAgent: getUserAgentSync(), // 获取设备用户代理
        //     version: getVersion(), // 获取应用程序版本。请注意，版本字符串是设备/操作系统格式化的，可以包含任何附加数据（如版本号等）。如果要确定版本格式，可以使用正则表达式获取返回版本字符串的所需部分
        //     brightness: getBrightnessSync(), // 获取设备主屏幕的当前亮度级别。目前仅适用于 iOS 系统。返回一个介于 0.0 和 1.0 之间的数字（含 0.0）。
        //     gms: hasGmsSync(), // 说明设备是否支持 Google 移动服务
        //     hms: hasHmsSync(), // 说明设备是否支持华为移动服务
        //     notch: await hasNotch(), // 显示设备是否有凹槽
        //     dynamicIsLand: hasDynamicIsland(), // 说明设备是否有动态岛(灵动岛，也叫刘海屏)
        //     systemFeature: hasSystemFeatureSync(''), // 说明设备是否具有特定的系统功能；比如：是否支持 Amazon Fire TV 联网，并将流媒体输出到高清电视上。 用户可以通过遥控器或游戏控制器来操作Amazon Fire TV。 参数传：amazon.hardware.fire_tv
        //     isAirplaneMode: isAirplaneModeSync(), // 显示设备是否处于飞行模式
        //     isBatteryCharging: isBatteryChargingSync(), //显示电池是否正在充电
        //     isEmulator: isEmulator(), // 说明应用程序是否在模拟器中运行。
        //     isKeyboardConnected: isKeyboardConnectedSync(), // 显示设备是否连接了键盘
        //     isLandscape: isLandscapeSync(), // 显示设备当前是否处于横向模式
        //     isLocationEnabled: isLocationEnabledSync(), // 告知设备是否在设备级别关闭了定位服务（与特定于应用程序的权限无关）
        //     isMouseConnected: isMouseConnectedSync(), // 显示设备是否连接了鼠标
        //     isHeadphonesConnected: isHeadphonesConnectedSync(), // 显示设备连接的是有线耳机还是蓝牙耳机
        //     isWiredHeadphonesConnected: isWiredHeadphonesConnectedSync(), // 显示设备是否连接到有线耳机
        //     isBluetoothHeadphonesConnected: isBluetoothHeadphonesConnectedSync(), // 显示设备是否已连接蓝牙耳机
        //     isPinOrFingerprintSet: isPinOrFingerprintSetSync(), // 说明是否为设备设置了 PIN 码或指纹
        //     isTablet: isTablet(), // 显示设备是否为平板电脑
        //     isLowRamDevice: isLowRamDevice(), // 显示设备内存是否不足
        //     isDisplayZoomed: isDisplayZoomed(), // 说明用户是否将 "显示缩放 "更改为 "已缩放"
        //     isTabletMode: isTabletMode(), // 显示设备是否处于平板电脑模式
        //     supported32BitAbis: supported32BitAbisSync(), // 该设备支持的 32 位 ABI 的有序列表
        //     supported64BitAbis: supported64BitAbisSync(), // 该设备支持的 64 位 ABI 的有序列表
        //     supportedAbis: supportedAbisSync(), // 返回支持的处理器架构版本列表：[ "arm64 v8", "Intel x86-64h Haswell", "arm64-v8a", "armeabi-v7a", "armeabi", "win_x86", "win_arm", "win_x64" ]
        //     syncUniqueId: Platform.OS === 'ios' ? await syncUniqueId() : getUniqueIdSync(), // 此方法适用于 iOS, 这将使 uniqueId 与 IDFV 同步，或设置新的随机字符串。在 iOS 上，它使用 DeviceUID uid 标识符。在其他平台上，只需调用本模块中的 getUniqueId()
        //     supportedMediaTypeList: getSupportedMediaTypeListSync(), // 此方法可获取支持的媒体编解码器列表。["audio/mpeg", "audio/mp4a-latm", "audio/mp4a-latm", "audio/mp4a-latm", "audio/mp4a-latm", "video/avc", "video/3gpp", "video/hevc", "video/mp4v-es", "video/av01", "video/avc", "video/avc", "video/avc", "video/avc"]

        // };
        const data = {
            brand: getBrand(),
            androidId: getAndroidIdSync(),
            userAgent: getUserAgentSync(),
            deviceType: getDeviceTypeSync(),
            model: getDeviceSync(),
            uniqueDeviceId: Platform.OS === 'ios' ? await syncUniqueId() : getUniqueIdSync(),
            deviceName: getDeviceNameSync(),
            fingerprint: getFingerprintSync(),
            systemName: getSystemName(),
            manufacturer: getManufacturerSync(),
            max_memory: getMaxMemorySync(),
            firstInstallTime: getFirstInstallTimeSync(),
            lastUpdateTime: getLastUpdateTimeSync(),
        };
        return data;
    } catch (error) {
        console.log('get device info error:', error);
    }
}
