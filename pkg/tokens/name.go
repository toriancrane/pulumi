// Copyright 2016-2018, Pulumi Corporation.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package tokens

import (
	"fmt"
	"unicode"

	"github.com/pulumi/pulumi/sdk/v3/go/common/util/contract"
)

// ResourceName is a validated resource name. It allows most printable characters, but not control characters or
// whitespace (except for spaces), it also can't be empty.
type ResourceName struct {
	name string
}

func (rn ResourceName) String() string {
	contract.Assertf(rn.name != "", "ResourceName must not be empty")
	return rn.name
}

func ParseResourceName(m string) (ResourceName, error) {
	if m == "" {
		return ResourceName{}, fmt.Errorf("resource names must not be empty")
	}

	for _, r := range m {
		if unicode.IsControl(r) {
			return ResourceName{}, fmt.Errorf("resource names must not contain control characters")
		}
		if unicode.IsSpace(r) && r != ' ' {
			return ResourceName{}, fmt.Errorf("resource names must not contain whitespace")
		}
	}

	return ResourceName{m}, nil
}
