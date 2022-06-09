# coding=utf-8
# *** WARNING: this file was generated by test. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import copy
import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from . import _utilities
from . import outputs
from ._enums import *
from ._inputs import *

__all__ = [
    'ListConfigurationsResult',
    'AwaitableListConfigurationsResult',
    'list_configurations',
    'list_configurations_output',
]

@pulumi.output_type
class ListConfigurationsResult:
    """
    The list of configurations.
    """
    def __init__(__self__, next_link=None, value=None):
        if next_link and not isinstance(next_link, str):
            raise TypeError("Expected argument 'next_link' to be a str")
        pulumi.set(__self__, "next_link", next_link)
        if value and not isinstance(value, list):
            raise TypeError("Expected argument 'value' to be a list")
        pulumi.set(__self__, "value", value)

    @property
    @pulumi.getter(name="nextLink")
    def next_link(self) -> Optional[str]:
        """
        Link for the next set of configurations.
        """
        return pulumi.get(self, "next_link")

    @property
    @pulumi.getter
    def value(self) -> Sequence['outputs.ConfigurationResponse']:
        """
        List of configurations.
        """
        return pulumi.get(self, "value")


class AwaitableListConfigurationsResult(ListConfigurationsResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return ListConfigurationsResult(
            next_link=self.next_link,
            value=self.value)


def list_configurations(configuration_filters: Optional[Sequence[pulumi.InputType['ConfigurationFilters']]] = None,
                        customer_subscription_details: Optional[pulumi.InputType['CustomerSubscriptionDetails']] = None,
                        skip_token: Optional[str] = None,
                        opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableListConfigurationsResult:
    """
    The list of configurations.
    API Version: 2020-12-01-preview.


    :param Sequence[pulumi.InputType['ConfigurationFilters']] configuration_filters: Holds details about product hierarchy information and filterable property.
    :param pulumi.InputType['CustomerSubscriptionDetails'] customer_subscription_details: Customer subscription properties. Clients can display available products to unregistered customers by explicitly passing subscription details
    :param str skip_token: $skipToken is supported on list of configurations, which provides the next page in the list of configurations.
    """
    __args__ = dict()
    __args__['configurationFilters'] = configuration_filters
    __args__['customerSubscriptionDetails'] = customer_subscription_details
    __args__['skipToken'] = skip_token
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('myedgeorder::listConfigurations', __args__, opts=opts, typ=ListConfigurationsResult).value

    return AwaitableListConfigurationsResult(
        next_link=__ret__.next_link,
        value=__ret__.value)


@_utilities.lift_output_func(list_configurations)
def list_configurations_output(configuration_filters: Optional[pulumi.Input[Sequence[pulumi.InputType['ConfigurationFilters']]]] = None,
                               customer_subscription_details: Optional[pulumi.Input[Optional[pulumi.InputType['CustomerSubscriptionDetails']]]] = None,
                               skip_token: Optional[pulumi.Input[Optional[str]]] = None,
                               opts: Optional[pulumi.InvokeOptions] = None) -> pulumi.Output[ListConfigurationsResult]:
    """
    The list of configurations.
    API Version: 2020-12-01-preview.


    :param Sequence[pulumi.InputType['ConfigurationFilters']] configuration_filters: Holds details about product hierarchy information and filterable property.
    :param pulumi.InputType['CustomerSubscriptionDetails'] customer_subscription_details: Customer subscription properties. Clients can display available products to unregistered customers by explicitly passing subscription details
    :param str skip_token: $skipToken is supported on list of configurations, which provides the next page in the list of configurations.
    """
    ...
