<?php
if (!defined('TYPO3_MODE')) {
    die ('Access denied.');
}
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
    '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:bw_tetris_tmp/Configuration/TSConfig/Page.tsconfig">'
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig(
    '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:bw_tetris_tmp/Configuration/TSconfig/User.tsconfig">'
);